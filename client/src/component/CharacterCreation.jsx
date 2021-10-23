import Character from "./Character";
import ColorPallete from "./ColorPallete";
import { Redirect } from "react-router-dom";

const CharacterCreation = ({
  hairColor,
  skinColor,
  shirtColor,
  pantsColor,
  shoeColor,
  setHairColor,
  setSkinColor,
  setShirtColor,
  setPantsColor,
  setShoeColor,
  authenticated,
}) => {
  const elStyling = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px 0",
  };
  return (
    <div>
      {authenticated ? (
        <div style={elStyling}>
          <Character
            hairColor={hairColor}
            skinColor={skinColor}
            shirtColor={shirtColor}
            pantsColor={pantsColor}
            shoeColor={shoeColor}
          />
          <ColorPallete
            hairColor={hairColor}
            skinColor={skinColor}
            shirtColor={shirtColor}
            pantsColor={pantsColor}
            shoeColor={shoeColor}
            setHairColor={setHairColor}
            setSkinColor={setSkinColor}
            setShirtColor={setShirtColor}
            setPantsColor={setPantsColor}
            setShoeColor={setShoeColor}
          />
        </div>
      ) : (
        <Redirect to={{ pathname: "/login" }} />
      )}
    </div>
  );
};

export default CharacterCreation;
