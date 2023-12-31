import React, { useEffect, useState } from "react";
import styles from "./HeaderLanding.module.css";
import { IoIosArrowDown } from "react-icons/io";

const HeaderLanding = () => {
  const [text, setText] = useState("");
  const name = "Reinato Priantama";
  const speed = 150;
  const resetTime = 3000;

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    let currentIndex = 0;
    let typingInterval;

    const startTyping = () => {
      typingInterval = setInterval(() => {
        if (currentIndex <= name.length) {
          setText(name.substring(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setTimeout(() => {
            setText("");
            currentIndex = 0;
            startTyping();
          }, resetTime);
        }
      }, speed);
    };

    setTimeout(() => {
      startTyping();
    }, 0);

    return () => {
      clearInterval(typingInterval);
    };
  }, [resetTime, speed, name]);

  return (
    <div>
      <div className={styles.wrapHeader}>
        <div className={`${styles.navBar} ${styles.blackBackground}`}>
          <div>
            <a href="#home" className={styles.navLink}>
              Home
            </a>
          </div>
          <div>
            <a href="#about" className={styles.navLink}>
              About
            </a>
          </div>
          <div>
            <a href="#project" className={styles.navLink}>
              Project
            </a>
          </div>
          <div>
            <a href="#contact" className={styles.navLink}>
              Contact
            </a>
          </div>
        </div>
      </div>

      <section id="home">
        <div className={styles.wrapSection}>
          <div className={styles.welcomeName}>
            {text && (
              <span
                style={{
                  textDecoration: "underline",
                  textDecorationColor: "orange",
                }}
              >
                {text}
              </span>
            )}
            {!text && (
              <>
                <span>&nbsp;</span>
                <span>&nbsp;</span>
                <span>&nbsp;</span>
              </>
            )}
            <div>Front-End</div>
            <div>Web Developer</div>
          </div>
        </div>
      </section>
      <div className={styles.wrapIcon} onClick={scrollToAbout}>
        <IoIosArrowDown className={styles.iconDecoration} />
      </div>
    </div>
  );
};

export default HeaderLanding;
