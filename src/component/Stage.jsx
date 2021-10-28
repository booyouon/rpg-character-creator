import { useEffect } from "react";
import { useState } from "react";
import Sprite from "./sprite/Sprite";

const Stage = ({
  capColor,
  faceColor,
  capShading,
  faceShading,
  eyeColor,
  cheeksColor,
  dotColor,
  nickname,
}) => {
  const [jump, setJump] = useState(false);
  const [score, setScore] = useState(0);
  const stageStyling = {
    padding: 0,
    width: "400px",
    height: "300px",
    backgroundColor: "white",
    border: "1px solid black",
    margin: "0 auto",
  };
  const spriteStyling = {
    width: "60px",
    margin: "0",
    padding: "0",
    position: "relative",
    top: "230px",
  };

  const obstacleStyling = {
    width: "20px",
    height: "20px",
    backgroundColor: "red",
    position: "relative",
    top: "200px",
    left: "400px",
    animation: "obstacle 1.1s infinite linear",
  };

  const triggerJump = (ev) => {
    if (
      (!jump && ev.keyCode == "32") ||
      ev.keyCode == "38" ||
      ev.keyCode == "87"
    ) {
      setJump(true);
      setTimeout(() => setJump(false), 500);
    }
  };

  setInterval(() => setScore(score + 1), 500);

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          width: "50px",
          height: "300px",
          backgroundColor: "white",
          position: "relative",
          left: "3px",
          zIndex: "1",
        }}
      ></div>

      <div style={stageStyling} onKeyUp={triggerJump} tabIndex="0">
        <div>{score}</div>
        <Sprite
          className={jump ? "jump" : null}
          style={spriteStyling}
          capColor={capColor}
          faceColor={faceColor}
          capShading={capShading}
          faceShading={faceShading}
          eyeColor={eyeColor}
          cheeksColor={cheeksColor}
          dotColor={dotColor}
        />
        <div className="obstacle" style={obstacleStyling}></div>
      </div>
      <div
        style={{
          width: "50px",
          height: "300px",
          backgroundColor: "white",
          position: "relative",
          left: "-3px",
          zIndex: "1",
        }}
      ></div>
    </div>
  );
};

export default Stage;
