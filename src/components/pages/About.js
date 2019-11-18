import React, { useState } from "react";
import "../../Daylight.css";

const About = () => {
  const [section, setSection] = useState({
    background: "change-background-1",
    words: "color-1",
    emoji: false
  });

  const { background, words, emoji } = section;

  const onSwitch = e => {
    let fullPageId = document.getElementById("fullpage");
    let switched = document.getElementById("switch");
    if (fullPageId.classList.contains("night")) {
      fullPageId.classList.remove("night");
      switched.classList.remove("switched");
    } else {
      fullPageId.classList.add("night");
      switched.classList.add("switched");
    }
  };

  const update = e => {
    let fullPageId = document.getElementById("fullpage");
    if (fullPageId.classList.contains("night")) {
      setSection({
        background: "change-background-2",
        words: "color-2",
        emoji: true
      });
    } else {
      setSection({
        background: "change-background-1",
        words: "color-1",
        emoji: false
      });
    }
  };

  return (
    <div className={`container even ${background}`} onClick={update}>
      <div className={`words column ${words}`} id="getout">
        <div className="about-myself">
          <h1>A LITTLE ABOUT MYSELF...</h1>
          <p>
            <span className="moving-section">
              I'm an 80's baby who rocks out to{" "}
              <span className="color-section-1">Mötley Crüe</span>
            </span>
            <span className="moving-section">
              , gets a little inspiration from{" "}
              <span className="color-section-2">Chance The Rapper</span>
            </span>
            <span className="moving-section">
              , and occasionally switches up the vibe with{" "}
              <span className="color-section-3">Frankie Valli.</span>
            </span>{" "}
            <span className="moving-section">
              I guess you can say I like music a little. I love to share a good
              laugh or story while drinking a good IPA, IPL, or even a little
              Maker's Mark (it's good for the soul). I believe the Dallas
              Cowboys are the best. Period. I'm also an avid gamer. If you
              really want to see me smile, whip out the legendary N64 with some
              smash brothers and we will do just fine.
            </span>
          </p>
        </div>
        <div className="what-i-do">
          <h1>WHAT I DO...</h1>
          <p>
            I'm a problem solver who likes to build with like minded people{" "}
            <span role="img" aria-label="sunglasses smiley face">
              😎
            </span>
          </p>
        </div>
        <div className="extra">
          <h1>Contact Me....</h1>
          <p>To see if we can solve a problem together</p>
          <p>
            If you want to party{" "}
            <span role="img" aria-label="party emojis">
              🎉🥃🤩
            </span>
          </p>
          {/* <span className="moving-section">
            <span className="color-section-2">Java,</span>
            <span className="color-section-1"> PHP,</span> Mocha,{" "}
            <span className="color-section-1">Chai,</span> and{" "}
            <span className="color-section-2">Jest.</span>
          </span> */}
        </div>
      </div>
      <div id="fullpage">
        <div className="section">
          <div className="time-circle">
            <div className="sun" />
            <div className="moon">
              <div />
              <div />
              <div />
            </div>
            <div className="stars">
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
            </div>
            <div className="water" />
          </div>
          <div id="intro-text">
            <h1 href="#">
              Flip The Switch
              {emoji === false ? (
                <span
                  role="img"
                  style={{ fontSize: "100px" }}
                  aria-label="Do you dare press"
                >
                  {" "}
                  &#128561;
                </span>
              ) : (
                <span
                  role="img"
                  style={{ fontSize: "100px" }}
                  aria-label="Do you dare press"
                >
                  {" "}
                  &#128563;
                </span>
              )}
            </h1>
          </div>
          <div id="switch" onClick={onSwitch}>
            <div id="circle" />
          </div>
        </div>
      </div>
      <div className="small-spotify-player">
        <iframe
          title="small_spotify_player"
          src="https://open.spotify.com/embed/playlist/3gvq5Ttb6x9DtP2FVxpJO2?si=u6GeN6XUQ3S1p0GWvjJ5RQ"
          width="300"
          height="80"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      </div>
      <div className={`spotify-webplayer ${words}`}>
        <iframe
          src="https://open.spotify.com/embed/playlist/3gvq5Ttb6x9DtP2FVxpJO2?si=u6GeN6XUQ3S1p0GWvjJ5RQ"
          width="470"
          height="700"
          title="spotify_player"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
        />
      </div>
    </div>
  );
};

export default About;
