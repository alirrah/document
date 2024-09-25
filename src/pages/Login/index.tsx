import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import config from "@site/docusaurus.config";
import { login } from "@site/src/services/AuthService";
import { EyeIcon, EyeOffIcon, LoadingIcon } from "@site/src/utils/IconUtil";
import { saveToken } from "@site/src/utils/JWTUtil";
import styles from "./styles.module.css";

const LoginPage = (): JSX.Element => {
  const history = useHistory();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [isDisable, setIsDisable] = useState<boolean>(false);
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    setIsDisable(true);
    try {
      const response = await login(username, password);
      if (response.status === 200) {
        saveToken(JSON.stringify(response.data));
        history.push(`${config.baseUrl}docs/web`);
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

  const handleShowHiddenPassword = (e: React.FormEvent): void => {
    e.preventDefault;
    setIsShowPassword((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      {error && <div className={styles.toast}>{error}</div>}

      <div className={styles.box}>
        <img src="img/logo.webp" alt="document logo" className={styles.logo} />

        <div className={styles.form}>
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

            <div>
              <input
                id="password"
                type={isShowPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button onClick={handleShowHiddenPassword} className={styles.eye}>
                {isShowPassword ? <EyeIcon /> : <EyeOffIcon />}
              </button>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            type="submit"
            className={styles.submit}
            disabled={isDisable}
          >
            ورود
            {isDisable && <LoadingIcon />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
