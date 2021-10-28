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
  const stageStyling = {
    padding: 0,
    width: "400px",
    height: "300px",
    backgroundColor: "white",
    border: "1px solid black",
    margin: "0 auto",
  };
  const spriteStyling = {
    width: "50px",
    margin: "0",
    padding: "0",
    position: "relative",
    top: "240px",
  };
  return (
    <div style={stageStyling} onKeyDown={() => setJump(true)} tabIndex="0">
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
    </div>
  );
};

export default Stage;
