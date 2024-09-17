import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Loading from "./../Loading";
import Error from "./../Error";
import config from "./../../../docusaurus.config";

interface APIMarkdownContentProps {
  id: number;
}

const APIMarkdownContent: React.FC<APIMarkdownContentProps> = ({ id }) => {
  const history = useHistory();
  const url = "http://127.0.0.1:8000";
  
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    setContent("");

    const token: { access: string; refresh: string } = JSON.parse(
      localStorage.getItem("jwt")
    );
    try {
      const response = await axios.get(`${url}/documents/${id}/`, {
        headers: {
          Authorization: `Bearer ${token.access}`,
        },
      });
      setContent(response.data.content);
    } catch (err: any) {
      if (err.response) {
        if (err.response.status === 401) {
          try {
            const response = await axios.post(`${url}/jwt/token/refresh/`, {
              refresh: token.refresh,
            });
            localStorage.setItem("jwt", JSON.stringify(response.data));

            return fetchData();
          } catch (error) {
            localStorage.removeItem("jwt");
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
