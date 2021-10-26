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
  console.log(capShading);
  const elStyling = {
    width: "100%",
    height: "100%",
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
