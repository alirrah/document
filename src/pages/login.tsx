import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import config from "./../../docusaurus.config";
import styles from "./login.module.css";

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
      const response = await axios.post(`${url}/jwt/login/`, {
        username,
        password,
      });

      if (response.status === 200) {
        localStorage.setItem("jwt", JSON.stringify(response.data));
        history.push(`${config.baseUrl}docs/my-custom-path`);
      }
    } catch (error) {
      setError(
        error.code === "ERR_BAD_REQUEST"
          ? "نام کاربری یا رمز عبور اشتباه می باشد."
          : "خطایی در ارسال درخواست به موجود آماده است."
      );

      setTimeout(() => {
        setError(null);
      }, 3000);
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
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
