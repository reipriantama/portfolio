import React, { useEffect, useRef, useState } from "react";
import styles from "./Content.module.css";
import {
  FaCss3,
  FaGithub,
  FaLinkedin,
  FaHtml5,
  FaReact,
  FaGitAlt,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiRedux } from "react-icons/si";

const Content = () => {
  const [showContent, setShowContent] = useState(false);
  const aboutRef = useRef(null);

  const handleIntersection = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setShowContent(true);
    }
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const aboutSection = aboutRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionTop = aboutSection.offsetTop - window.innerHeight * 0.5;

      if (scrollPosition > sectionTop) {
        setShowContent(true);
      } else {
        setShowContent(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [aboutRef]);

  return (
    <div>
      <div id="about" ref={aboutRef} className={styles.aboutBackground}>
        <div className={styles.aboutTitle}> about me</div>
        <div className={styles.aboutContainer}>
          <div
            className={`${styles.aboutLeft} ${showContent ? styles.show : ""}`}
          >
            <img
              src={`${process.env.PUBLIC_URL}/Assets/Content/photoProfile.png`}
              alt="profileImage"
              style={{ width: "413px" }}
            />
          </div>
          <div
            className={`${styles.aboutRight} ${showContent ? styles.show : ""}`}
          >
            <div style={{ fontWeight: "bold", fontSize: "30px" }}>
              Hi there!
            </div>
            <div style={{ marginTop: "20px" }}>
              I am Reinato Priantama with a bachelor's degree in Asset
              Management, now I have decided to study software engineering. I
              have learned a lot about HTML, CSS, and JavaScript with the
              React.JS framework. I can work with git/github as version control.
              I have reached a Front-End Developer certificate in just 3 months.
              And it proves that I am a fast learner. I am passionate with
              following the latest trends and advances in software development
              and am committed to providing the best.
            </div>
            <div style={{ marginTop: "20px" }}>
              My greatest strength is my growth mindset, I always obsessed with
              improving my skills in logical thinking and I excited to make the
              leap and continue to perfect my skills with the right company.
              That's why I decided to start my career path in Software
              Engineering.
            </div>
            <div className={styles.rightIcon}>
              <a
                href="https://github.com/reipriantama"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "white" }}
              >
                <div className={styles.iconSocialMedia}>
                  <FaGithub />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/reinato-priantama/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "white" }}
              >
                <div className={styles.iconSocialMedia}>
                  <FaLinkedin />
                </div>
              </a>
              <a
                href="https://twitter.com/reiprntm_"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "white" }}
              >
                <div className={styles.iconSocialMedia}>
                  <FaXTwitter />
                </div>
              </a>
              <a
                href="https://www.instagram.com/reiprntm_/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "white" }}
              >
                <div className={styles.iconSocialMedia}>
                  <FaInstagram />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.skillsWrap}>
        <div className={styles.skillsTitle}>Skills</div>
        <div className={`${styles.skillsContainer} container text-center`}>
          <div className="row mt-5">
            <div className="col">
              <FaHtml5 className={styles.skillsIcon} />
              <div className={styles.textIcon}>HTML5</div>
            </div>
            <div className="col">
              <FaCss3 className={styles.skillsIcon} />
              <div className={styles.textIcon}>CSS</div>
            </div>
            <div className="col">
              <IoLogoJavascript className={styles.skillsIcon} />
              <div className={styles.textIcon}>JAVASCRIPT</div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col">
              <FaReact className={styles.skillsIcon} />
              <div className={styles.textIcon}>REACT</div>
            </div>
            <div className="col">
              <FaGitAlt className={styles.skillsIcon} />
              <div className={styles.textIcon}>GIT</div>
            </div>
            <div className="col">
              <SiRedux className={styles.skillsIcon} />
              <div className={styles.textIcon}>REDUX</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
