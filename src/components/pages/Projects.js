import React from "react";
import $ from "jquery";
import Image from "../layout/Images";
import savage from "../../assests/images/savage.png";
import belp from "../../assests/images/Belp.png";
import notehero from "../../assests/images/Notehero.png";

const Projects = () => {
  $(document).ready(() => {
    $(".project-button").click(e => {
      let $div = $(e.target);
      let value = $div.attr("data-filter");
      if (value === "all") {
        $(".filter").show("1000");
        $(".projects").removeClass("container even");
      } else {
        $(".filter")
          .not(`.${value}`)
          .hide("1000");
        $(".filter")
          .filter(`.${value}`)
          .show("1000");
      }
    });

    $(".project-button").click(e => {
      let active = $(e.target);
      active
        .addClass("active")
        .siblings()
        .removeClass("active");
    });
  });

  return (
    <div className="container column" style={{ alignItems: "center" }}>
      <div className="buttons">
        <ul className="project-buttons">
          <li className="project-button active" data-filter="all">
            All
          </li>
          <li className="project-button" data-filter="item1">
            JQuery
          </li>
          <li className="project-button" data-filter="item2">
            Phaser.io
          </li>
          <li className="project-button" data-filter="item3">
            React
          </li>
          {/* <li className="project-button" data-filter="item4">
            Button 4
          </li>
          <li className="project-button" data-filter="item5">
            Button 5
          </li> */}
        </ul>
      </div>
      <div className="projects">
        <div className="container row_1">
          <div className="project filter item2">
            <Image
              image={savage}
              info={"Savage Ghosting Game"}
              name={"Savage Ghosting"}
              skills={"Phaser.io, Node, Express, CSS3, HTML5, Socket.io"}
              description={
                "You and up to 5 of your friends enter the arena. You get to shoot, dodge, and try to survive until either you or one of your competitor is named the victor. Don't worry if you do die, your ghost has a surprise."
              }
              demo={"https://savage-ghosting.herokuapp.com/"}
              repo={"https://github.com/52lions06/boat-phaser-game"}
            />
          </div>
          <div className="project filter item3">
            <Image
              image={notehero}
              info={"Notecard App"}
              name={"NoteHero"}
              skills={"React, Node, Express, CSS3, HTML5, Travis CI"}
              description={
                "Learning something new can be hard. That's where NoteHero comes in is here for you to ease the struggle. This flashcard tool let's you enter vocabulary words and definitions to study new topics. Studying in style has never looked so good"
              }
              demo={"https://notehero.herokuapp.com/"}
              repo={"https://github.com/52lions06/flashcards"}
            />
          </div>
          <div className="project filter item1">
            <Image
              image={belp}
              info={"Belp App"}
              name={"Belp"}
              skills={"JQuery, Node, Express, CSS3, HTML"}
              description={
                "This app is made for the beer lovers. It lets you express what you believe, feel, experience, and love about beers. So add a brew when you just need to let the world know about that very special drink that improves and changes the world."
              }
              demo={"https://boiling-refuge-95989.herokuapp.com"}
              repo={"https://github.com/52lions06/beer-app"}
            />
          </div>
          {/* <div className="project filter item4">
            <Image
              image={"Image"}
              info={"Info"}
              name={"name"}
              skills={"skills"}
              description={"description"}
              demo={"demo"}
              repo={"repo"}
            />
          </div>
          <div className="project filter item5">
            <Image
              image={"Image"}
              info={"Info"}
              name={"name"}
              skills={"skills"}
              description={"description"}
              demo={"demo"}
              repo={"repo"}
            />
          </div> */}
        </div>
        {/* <div className="container row_2">
          <div className="project filter item1">
            <Image
              image={"Image"}
              info={"Info"}
              name={"name"}
              skills={"skills"}
              description={"description"}
              demo={"demo"}
              repo={"repo"}
            />
          </div>
          <div className="project filter item2">
            <Image
              image={"Image"}
              info={"Info"}
              name={"name"}
              skills={"skills"}
              description={"description"}
              demo={"demo"}
              repo={"repo"}
            />
          </div>
          <div className="project filter item3">
            <Image
              image={"Image"}
              info={"Info"}
              name={"name"}
              skills={"skills"}
              description={"description"}
              demo={"demo"}
              repo={"repo"}
            />
          </div>
          <div className="project filter item4">
            <Image
              image={"Image"}
              info={"Info"}
              name={"name"}
              skills={"skills"}
              description={"description"}
              demo={"demo"}
              repo={"repo"}
            />
          </div>
          <div className="project filter item5">
            <Image
              image={"Image"}
              info={"Info"}
              name={"name"}
              skills={"skills"}
              description={"description"}
              demo={"demo"}
              repo={"repo"}
            />
          </div>
        </div>
        <div className="container row_3">
          <div className="project filter item1">
            <Image
              image={"Image"}
              info={"Info"}
              name={"name"}
              skills={"skills"}
              description={"description"}
              demo={"demo"}
              repo={"repo"}
            />
          </div>
          <div className="project filter item2">
            <Image
              image={"Image"}
              info={"Info"}
              name={"name"}
              skills={"skills"}
              description={"description"}
              demo={"demo"}
              repo={"repo"}
            />
          </div>
          <div className="project filter item3">
            <Image
              image={"Image"}
              info={"Info"}
              name={"name"}
              skills={"skills"}
              description={"description"}
              demo={"demo"}
              repo={"repo"}
            />
          </div>
          <div className="project filter item4">
            <Image
              image={"Image"}
              info={"Info"}
              name={"name"}
              skills={"skills"}
              description={"description"}
              demo={"demo"}
              repo={"repo"}
            />
          </div>
          <div className="project filter item5">
            <Image
              image={"Image"}
              info={"Info"}
              name={"name"}
              skills={"skills"}
              description={"description"}
              demo={"demo"}
              repo={"repo"}
            />
          </div>
        </div>
        <div className="container row_4">
          <div className="project filter item1">
            <Image
              image={"Image"}
              info={"Info"}
              name={"name"}
              skills={"skills"}
              description={"description"}
              demo={"demo"}
              repo={"repo"}
            />
          </div>
          <div className="project filter item2">
            <Image
              image={"Image"}
              info={"Info"}
              name={"name"}
              skills={"skills"}
              description={"description"}
              demo={"demo"}
              repo={"repo"}
            />
          </div>
          <div className="project filter item3">
            <Image
              image={"Image"}
              info={"Info"}
              name={"name"}
              skills={"skills"}
              description={"description"}
              demo={"demo"}
              repo={"repo"}
            />
          </div>
          <div className="project filter item4">
            <Image
              image={"Image"}
              info={"Info"}
              name={"name"}
              skills={"skills"}
              description={"description"}
              demo={"demo"}
              repo={"repo"}
            />
          </div>
          <div className="project filter item5">
            <Image
              image={"Image"}
              info={"Info"}
              name={"name"}
              skills={"skills"}
              description={"description"}
              demo={"demo"}
              repo={"repo"}
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
