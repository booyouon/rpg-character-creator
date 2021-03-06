import Sprite from "./sprite/Sprite";
const Character = ({
  capColor,
  faceColor,
  capShading,
  faceShading,
  eyeColor,
  cheeksColor,
  dotColor,
}) => {
  const elStyling = {
    width: "20%",
    height: "20%",
  };
  return (
    <div style={elStyling}>
      <h2>Character Editor</h2>
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
