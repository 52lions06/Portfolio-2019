import React, { Fragment, useEffect, useState } from "react";
import ProgressBar from "../layout/ProgressBar";
import Stars from "../layout/Stars";
import "../../Parallax.css";
import "../../assests/words/stylesheet.css";

const Skills = () => {
  const [percentage, setPercentage] = useState({
    html: 0,
    css: 0,
    javascript: 0,
    reactvalue: 0,
    redux: 0,
    node: 0,
    php: 0,
    express: 0,
    java: 0,
    wordpress: 0
  });

  const {
    html,
    css,
    javascript,
    reactvalue,
    redux,
    node,
    php,
    express,
    java,
    wordpress
  } = percentage;

  useEffect(() => {
    // i want to gradually increase the values to a set amount
    const timer = setTimeout(() => {
      setPercentage({
        html: 90,
        css: 90,
        javascript: 80,
        reactvalue: 88,
        redux: 80,
        node: 70,
        php: 60,
        express: 70,
        java: 50,
        wordpress: 80
      });
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Fragment>
      <div
        className="box container"
        style={{ justifyContent: "space-between" }}
      >
        <section className="wrapper">
          <div id="stars" />
          <div id="stars2" />
          <div id="stars3" />
          <div id="skill-list">
            <ul>
              <li className="skill">
                HTML5 : <ProgressBar percentage={html} />
                <Stars percentage={html} />{" "}
              </li>
              <li className="skill">
                CSS3 : <ProgressBar percentage={css} />
                <Stars percentage={css} />
              </li>
              <li className="skill">
                JAVASCRIPT : <ProgressBar percentage={javascript} />
                <Stars percentage={javascript} />
              </li>
              <li className="skill">
                REACT : <ProgressBar percentage={reactvalue} />
                <Stars percentage={reactvalue} />
              </li>
              <li className="skill">
                REDUX : <ProgressBar percentage={redux} />
                <Stars percentage={redux} />
              </li>
              <li className="skill">
                NODEJS : <ProgressBar percentage={node} />
                <Stars percentage={node} />
              </li>
              <li className="skill">
                PHP : <ProgressBar percentage={php} />
                <Stars percentage={php} />
              </li>
              <li className="skill">
                EXPRESS : <ProgressBar percentage={express} />
                <Stars percentage={express} />
              </li>
              <li className="skill">
                JAVA : <ProgressBar percentage={java} />
                <Stars percentage={java} />
              </li>

              <li className="skill">
                WORDPRESS : <ProgressBar percentage={wordpress} />
                <Stars percentage={wordpress} />
              </li>
            </ul>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default Skills;
