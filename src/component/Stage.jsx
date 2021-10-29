import { useEffect, useState } from "react";
import Sprite from "./sprite/Sprite";
import { Button } from "@mui/material";

const Stage = ({
  capColor,
  faceColor,
  capShading,
  faceShading,
  eyeColor,
  cheeksColor,
  dotColor,
  highscore,
}) => {
  const [jump, setJump] = useState(false);
  const [gameover, setGameover] = useState(true);

  const [score, setScore] = useState(0);

  const stageStyling = {
    padding: 0,
    width: "400px",
    height: "300px",
    backgroundColor: "white",
    border: "1px solid black",
    margin: "0 auto",
  };

  useEffect(() => {
    const spriteDOM = document.querySelector(".sprite");
    const obstacleDOM = document.querySelector(".obstacle");
    setInterval(() => {
      if (
        parseInt(
          window.getComputedStyle(obstacleDOM).getPropertyValue("left")
        ) <= 50 &&
        parseInt(
          window.getComputedStyle(obstacleDOM).getPropertyValue("left")
        ) >= -10 &&
        parseInt(window.getComputedStyle(spriteDOM).getPropertyValue("top")) <=
          235 &&
        parseInt(window.getComputedStyle(spriteDOM).getPropertyValue("top")) >=
          210
      ) {
        setGameover(true);
        setScore(0);
      }
    }, 10);
  }, []);

  const spriteStyling = {
    width: "60px",
    margin: "0",
    padding: "0",
    position: "relative",
    top: "235px",
  };

  const obstacleStyling = {
    width: "30px",
    position: "relative",
    top: "200px",
    left: "400px",
    animation: gameover ? "none" : "obstacle 1.1s infinite linear",
  };

  const buttonStyle = {
    width: "300px",
    marginTop: "20px",
  };

  const triggerJump = (ev) => {
    if (
      !jump &&
      (ev.keyCode === 32 || ev.keyCode === 38 || ev.keyCode === 87)
    ) {
      setJump(true);
      setScore(score + 1);
      setTimeout(() => setJump(false), 500);
    }
  };

  const vanishingThings = {
    width: "50px",
    height: "300px",
    backgroundColor: "white",
    zIndex: "1",
  };

  return (
    <div onKeyUp={triggerJump} tabIndex="0">
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <p>Score: {score}</p>
        <p>High Score: {highscore}</p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto",
          width: "500px",
        }}
      >
        <div style={vanishingThings}></div>
        <div style={stageStyling}>
          <Sprite
            className={`sprite ${jump ? "jump" : null}`}
            style={spriteStyling}
            capColor={capColor}
            faceColor={faceColor}
            capShading={capShading}
            faceShading={faceShading}
            eyeColor={eyeColor}
            cheeksColor={cheeksColor}
            dotColor={dotColor}
          />
          <div className="obstacle" style={obstacleStyling}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -0.5 14 13"
              shape-rendering="crispEdges"
            >
              <metadata>
                Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj
              </metadata>
              <path
                stroke="#000000"
                d="M6 0h2M5 1h4M4 2h2M8 2h2M2 3h3M9 3h3M1 4h1M12 4h1M0 5h1M3 5h2M9 5h2M13 5h1M0 6h1M5 6h1M8 6h1M13 6h1M0 7h1M4 7h1M10 7h1M13 7h1M0 8h1M3 8h2M9 8h2M13 8h1M0 9h1M13 9h1M1 10h1M12 10h1M2 11h2M10 11h2M4 12h6"
              />
              <path
                stroke="#8f563b"
                d="M6 2h2M5 3h3M2 4h8M1 5h2M5 5h4M11 5h1M1 6h4M6 6h2M9 6h3M1 7h2M5 7h4M11 7h1M1 8h2M5 8h4M11 8h1M1 9h11M2 10h8M4 11h3"
              />
              <path
                stroke="#663931"
                d="M8 3h1M10 4h2M12 5h1M12 6h1M12 7h1M12 8h1M12 9h1M10 10h2M7 11h3"
              />
              <path stroke="#ffffff" d="M3 7h1M9 7h1" />
            </svg>
          </div>
        </div>
        <div style={vanishingThings}></div>
      </div>
      <Button
        onClick={() => setGameover(false)}
        style={buttonStyle}
        variant="contained"
        color="secondary"
      >
        Start Game
      </Button>
    </div>
  );
};

export default Stage;
