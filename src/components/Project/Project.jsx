import React, { useState } from "react";
import styles from "./Project.module.css";

const Project = () => {
  const [projectData] = useState([
    {
      image: `${process.env.PUBLIC_URL}/Assets/Project/bcrClient.png`,
      title: "BCR Client",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut necessitatibus enim, eligendi eaque eveniet consequuntur. Provident assumenda cupiditate mollitia officiis maxime illo, vel amet minima in voluptatibus excepturi commodi magnam.",
      link: "https://bcr-kelompok2-platinum-client.vercel.app/",
    },
    {
      image: `${process.env.PUBLIC_URL}/Assets/Project/bcrCms.png`,
      title: "BCR CMS",
      description: "John Dee 32, Bromo",
      link: "https://bcr-kelompok2-platinum-cms.vercel.app/login",
    },
    {
      image: `${process.env.PUBLIC_URL}/Assets/Project/portfolio.png`,
      title: "Portofolio Website",
      description: "John Dee 32, Bromo",
      link: "https://reinatopriantama.vercel.app/",
    },
  ]);

  return (
    <div>
      <div id="project" className={styles.projectContainer}>
        <div className={styles.projectTitle}>project</div>
        {projectData &&
          projectData.map((item, index) => (
            <div key={index} className={styles.projectContent}>
              <div className={styles.projectLeft}>
                <div className={styles.projectImage}>
                  <img
                    src={item.image}
                    alt="project-pic"
                    style={{ width: "450px" }}
                  />
                </div>
              </div>
              <div className={styles.projectRight}>
                <div className={styles.contentTitle}>{item.title}</div>
                {/* <div className={styles.contentDescription}>
                  {item.description}
                </div> */}
                <div className={styles.contentLink}>
                  <a href={item.link}>live site</a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Project;
