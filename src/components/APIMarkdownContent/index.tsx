import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Loading from "@site/src/components/Loading";
import Error from "@site/src/components/Error";
import config from "@site/docusaurus.config";
import { getContent } from "@site/src/services/ContentService";
import { refreshTokens } from "@site/src/services/AuthService";
import { getToken, removeToken, saveToken } from "@site/src/utils/JWTUtil";
import { TokenInterface } from "@site/src/interfaces/TokenInterface";

const APIMarkdownContent = ({ id }: { id: number }): JSX.Element => {
  const history = useHistory();

  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    setContent("");

    const token: TokenInterface = JSON.parse(getToken());
    try {
      const response = await getContent(id, token);
      setContent(response.data.content);
    } catch (err) {
      if (err.response) {
        if (err.response.status === 401) {
          try {
            const response = await refreshTokens(token);
            saveToken(JSON.stringify(response.data));

            return fetchData();
          } catch (error) {
            removeToken();
            history.replace(`${config.baseUrl}login`);
          }
        } else {
          setError(
            "خطایی در ارسال درخواست به موجود آماده است. شماره خطا: " +
              err.response.status
          );
        }
      } else {
        setError("خطایی در ارسال درخواست به موجود آماده است.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <>
      {error ? (
        <Error text={error} speed={50} getData={fetchData} />
      ) : loading ? (
        <Loading />
      ) : (
        <ReactMarkdown>{content}</ReactMarkdown>
      )}
    </>
  );
};

export default APIMarkdownContent;
