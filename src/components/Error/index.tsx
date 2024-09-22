import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";

const Error = ({
  text,
  speed,
  getData,
}: {
  text: string;
  speed: number;
  getData: () => void;
}): JSX.Element => {
  const [displayedText, setDisplayedText] = useState<string>("");

  useEffect(() => {
    let index: number = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index++));

      if (index === text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <>
      <p>{displayedText}</p>

      <button onClick={getData} className={styles.button}>
        <p>درخواست مجدد</p>
      </button>
    </>
  );
};

export default Error;
