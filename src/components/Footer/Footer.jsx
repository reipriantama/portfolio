import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div>
      <div className={styles.footerContainer}>
        <div className={styles.footerWrap}>
          <div>DESIGNED BY </div>
          <a
            href="https://afuadeborahcodes.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "white" }}
          >
            AFUA DEBORAH
          </a>
        </div>
        <div className={styles.footerWrap}>
          <div>REDISIGNED BY </div>
          <a
            href="https://www.linkedin.com/in/reinato-priantama/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "white" }}
          >
            REINATO PRIANTAMA
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
