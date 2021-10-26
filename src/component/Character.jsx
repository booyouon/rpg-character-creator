import Sprite from "./sprite/Sprite";
const Character = ({
  capColor,
  faceColor,
  capShading,
  faceShading,
  eyeColor,
  cheeksColor,
  dotColor,
  nickname,
}) => {
  const elStyling = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px 0",
  };
  return (
    <div style={elStyling}>
      <h2>{nickname}</h2>
      <Sprite
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

export default Character;
