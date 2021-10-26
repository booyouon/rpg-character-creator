import MushroomCap from "./MushroomCap";
import MushroomFace from "./MushroomFace";

const Sprite = ({ capColor, faceColor, faceShading, capShading, eyeColor }) => {
  return (
    <div>
      <MushroomCap capColor={capColor} capShading={capShading} />
      <MushroomFace
        faceColor={faceColor}
        faceShading={faceShading}
        eyeColor={eyeColor}
      />
    </div>
  );
};

export default Sprite;
