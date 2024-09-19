import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import config from "../../../docusaurus.config";
import styles from "./styles.module.css";
import { login } from "../../services/authService";
import { handleError } from "../../utils/errorUtils";

const LoginPage: React.FC = () => {
  const url = "http://127.0.0.1:8000";
  const history = useHistory();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [isDisable, setIsDisable] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    setIsDisable(true);
    try {
      // login is now an imported service
      const response = await login(username, password);

      if (response.status === 200) {
        localStorage.setItem("jwt", JSON.stringify(response.data));
        history.push(`${config.baseUrl}docs/my-custom-path`);
      }
    } catch (error) {
      // error message handled as imported util function
      handleError(error, setError);
    } finally {
      setIsDisable(false);
    }
  };

  return (
    <div className={styles.container}>
      {error && <div className={styles.toast}>{error}</div>}

      <div className={styles.box}>
        <img src="img/logo.webp" alt="document logo" className={styles.logo} />

        <form onSubmit={handleSubmit} className={styles.form}>
          <p className={styles.title}>ورود به حساب کاربری</p>

          <div>
            <label htmlFor="username">نام کاربری</label>

            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="password">رمز عبور</label>

            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className={styles.submit} disabled={isDisable}>
            ورود
            {isDisable && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <g fill="currentColor">
                  <circle cx="12" cy="3.5" r="1.5">
                    <animateTransform
                      attributeName="transform"
                      calcMode="discrete"
                      dur="2.4s"
                      repeatCount="indefinite"
                      type="rotate"
                      values="0 12 12;90 12 12;180 12 12;270 12 12"
                    />
                    <animate
                      attributeName="opacity"
                      dur="0.6s"
                      repeatCount="indefinite"
                      values="1;1;0"
                    />
                  </circle>
                  <circle cx="12" cy="3.5" r="1.5" transform="rotate(30 12 12)">
                    <animateTransform
                      attributeName="transform"
                      begin="0.2s"
                      calcMode="discrete"
                      dur="2.4s"
                      repeatCount="indefinite"
                      type="rotate"
                      values="30 12 12;120 12 12;210 12 12;300 12 12"
                    />
                    <animate
                      attributeName="opacity"
                      begin="0.2s"
                      dur="0.6s"
                      repeatCount="indefinite"
                      values="1;1;0"
                    />
                  </circle>
                  <circle cx="12" cy="3.5" r="1.5" transform="rotate(60 12 12)">
                    <animateTransform
                      attributeName="transform"
                      begin="0.4s"
                      calcMode="discrete"
                      dur="2.4s"
                      repeatCount="indefinite"
                      type="rotate"
                      values="60 12 12;150 12 12;240 12 12;330 12 12"
                    />
                    <animate
                      attributeName="opacity"
                      begin="0.4s"
                      dur="0.6s"
                      repeatCount="indefinite"
                      values="1;1;0"
                    />
                  </circle>
                </g>
              </svg>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
