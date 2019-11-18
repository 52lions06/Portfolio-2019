import React from "react";
import Typing from "react-typing-animation";
import logo from "../../assests/images/wm_black_badge.png";

const Home = () => {
  return (
    <div className="home container">
      <div className="my_name column">
        <div className="hello">
          <Typing>
            <span className="wiggle"> H</span>
            <span className="wiggle"> O</span>
            <span className="wiggle"> L</span>
            <span className="wiggle"> A</span>
            <span className="wiggle"> !</span>
            <Typing.Delay ms={6000} />
            <Typing.Backspace count={20} />
            <span className="wiggle"> H</span>
            <span className="wiggle"> E</span>
            <span className="wiggle"> L</span>
            <span className="wiggle"> L</span>
            <span className="wiggle"> O</span>
            <span className="wiggle"> !</span>
            <Typing.Delay ms={10000} />
          </Typing>
        </div>
        <div className="will">
          <Typing>
            <Typing.Delay ms={1000} />
            <span className="wiggle"> I</span>
            <span className="wiggle">'</span>
            <span style={{ marginRight: "0.4em" }} className="wiggle">
              {" "}
              M
            </span>
            <span className="wiggle"> W</span>
            <span className="wiggle"> I</span>
            <span className="wiggle"> L</span>
            <span className="wiggle"> L</span>
            <span className="wiggle"> !</span>
            <Typing.Delay ms={10000} />
          </Typing>
        </div>
        <div className="typwriter">
          <Typing>
            <Typing.Delay ms={4000} />
            <span>
              I like to collaborate with great people and make great things
              happen.
            </span>
            <Typing.Delay ms={2000} />
            <Typing.Backspace count={67} />
            <span> also like to drink beer</span>
            <Typing.Delay ms={2000} />
            <Typing.Backspace count={10} />
            <span>I party from time to time</span>
          </Typing>
        </div>
      </div>

      <div className="logo">
        <img id="spinning" src={logo} alt="William McKelvey's Brand" />
      </div>
    </div>
  );
};

export default Home;
