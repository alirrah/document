import React, { useState, useEffect } from "react";
import styles from "./error.module.css";

interface TypingEffectProps {
  text: string;
  speed: number;
  getData: () => void;
}

const Error: React.FC<TypingEffectProps> = ({ text, speed, getData }) => {
  const [displayedText, setDisplayedText] = useState<string>("");

  useEffect(() => {
    let index = 0;
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
