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
    width: "100%",
    height: "200px",
    backgroundColor: "white",
    border: "1px solid black",
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
