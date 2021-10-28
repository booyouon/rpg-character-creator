import MushroomCap from "./MushroomCap";
import MushroomFace from "./MushroomFace";

const Sprite = ({
  capColor,
  faceColor,
  capShading,
  faceShading,
  eyeColor,
  cheeksColor,
  dotColor,
  style,
}) => {
  return (
    <div style={style}>
      <MushroomCap
        capColor={capColor}
        capShading={capShading}
        dotColor={dotColor}
      />
      <MushroomFace
        faceColor={faceColor}
        faceShading={faceShading}
        eyeColor={eyeColor}
        cheeksColor={cheeksColor}
      />
    </div>
  );
};

export default Sprite;
