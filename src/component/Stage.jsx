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
  const stageStyling = {
    padding: 0,
    margin: 0,
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
    top: "140px",
  };
  return (
    <div style={stageStyling}>
      <Sprite
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
