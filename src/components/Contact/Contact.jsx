import React from "react";
import styles from "./Contact.module.css";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <div id="contact" className={styles.contactContainer}>
        <div className={styles.contactTittle}>Contact Me</div>
        <div className={styles.contactContent}>
          <div className={styles.contactLeft}>
            <form className={styles.contactForm}>
              <div className="form-group">
                <input
                  type="name"
                  className={`${styles.inputFocus} form-control`}
                  id="inputName"
                  aria-describedby="nameHelp"
                  placeholder="YOUR NAME"
                  style={{ borderRadius: "0", height: "40px" }}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className={`${styles.inputFocus} form-control`}
                  id="inputEmail"
                  aria-describedby="emailHelp"
                  placeholder="YOUR EMAIL"
                  style={{ borderRadius: "0", height: "40px" }}
                />
              </div>
              <div className="form-group">
                <textarea
                  type="message"
                  className={`${styles.inputFocus} form-control`}
                  id="inputMessage"
                  aria-describedby="messageHelp"
                  style={{ borderRadius: "0", height: "175px" }}
                />
              </div>
              <div className={styles.contactButton}>
                <button
                  type="submit"
                  className="btn btn-warning btn-lg"
                  style={{ width: "200px", borderRadius: "0" }}
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
          <div className={styles.contactRight}>
            <div className={styles.contactDescription}>
              Do you have any questions? Please do not hesitate to contact us
              directly. I will come back to you within a matter of hours to help
              you.
            </div>
            <br />
            <div className={styles.contactIcons}>
              <div>
                <IoIosPhonePortrait />
              </div>
              <div>+62 853-1401-3087</div>
            </div>
            <div className={styles.contactIcons}>
              <div>
                <MdEmail />
              </div>
              <div>priantamareinato@gmail.com</div>
            </div>
            <div className={styles.iconWrap}>
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
    </div>
  );
};

export default Contact;
