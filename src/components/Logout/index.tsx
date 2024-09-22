import React from "react";
import { useHistory } from "react-router-dom";
import config from "@site/docusaurus.config";
import { removeToken } from "@site/src/utils/JWTUtil";
import { LogoutIcon } from "@site/src/utils/IconUtil";
import styles from "./styles.module.css";

const Logout = (): JSX.Element => {
  const history = useHistory();

  const handleClick = () => {
    removeToken();
    history.replace(`${config.baseUrl}login`);
  };

  return (
    <button
      onClick={handleClick}
      className={styles.logout}
      title="خروج"
      aria-label="خروج"
    >
      <LogoutIcon />
    </button>
  );
};

export default Logout;
