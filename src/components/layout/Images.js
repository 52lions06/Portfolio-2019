import React, { useState } from "react";

const Images = ({ image, info, name, skills, description, demo, repo }) => {
  const [showSkills, setSkills] = useState(false);
  const [showDesc, setDesc] = useState(false);

  return (
    <div>
      <div className="project-image">
        <a href={demo} target="_blank" rel="noopener noreferrer" className="">
          <img src={image} alt={info} />
        </a>
      </div>
      <div className="project-details">
        <div className="project-name">{name}</div>

        <div className="section-of-buttons">
          <div className="section-1">
            {!showSkills ? (
              <button className="skills" onClick={() => setSkills(true)}>
                Skills
              </button>
            ) : (
              <div
                className="project-skills"
                onClick={() => setSkills(false)}
                style={{ transition: "all 1s ease" }}
              >
                <p>{skills}</p>
                <div>
                  {" "}
                  <button className="close-btn">Close Skills</button>{" "}
                </div>
              </div>
            )}
            {!showDesc ? (
              <button className="description" onClick={() => setDesc(true)}>
                Description
              </button>
            ) : (
              <div
                className="project-description"
                onClick={() => setDesc(false)}
              >
                <p>{description}</p>
                <div>
                  {" "}
                  <button className="close-btn">Close Description</button>{" "}
                </div>
              </div>
            )}{" "}
          </div>
          <div className="section-2">
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              {" "}
              <button className="project-demo"> Demo</button>
            </a>
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <button className="project-repo"> Repo</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
  // }
};

export default Images;
