import Character from "./Character";
import ColorPallete from "./ColorPallete";
import { Redirect } from "react-router-dom";
import { useState } from "react";

const CharacterCreation = ({
  id,
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
  API_URL,
  username,
  password,
  nickname,
}) => {
  const elStyling = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px 0",
  };

  const [tempHair, setTempHair] = useState(hairColor);
  const [tempSkin, setTempSkin] = useState(skinColor);
  const [tempShirt, setTempShirt] = useState(shirtColor);
  const [tempPants, setTempPants] = useState(pantsColor);
  const [tempShoe, setTempShoe] = useState(shoeColor);

  return (
    <div>
      {authenticated ? (
        <div style={elStyling}>
          <Character
            hairColor={tempHair}
            skinColor={tempSkin}
            shirtColor={tempShirt}
            pantsColor={tempPants}
            shoeColor={tempShoe}
          />
          <ColorPallete
            id={id}
            API_URL={API_URL}
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
            username={username}
            password={password}
            nickname={nickname}
            tempHair={tempHair}
            tempSkin={tempSkin}
            tempShirt={tempShirt}
            tempPants={tempPants}
            tempShoe={tempShoe}
            setTempHair={setTempHair}
            setTempSkin={setTempSkin}
            setTempShirt={setTempShirt}
            setTempPants={setTempPants}
            setTempShoe={setTempShoe}
          />
        </div>
      ) : (
        <Redirect to={{ pathname: "/login" }} />
      )}
    </div>
  );
};

export default CharacterCreation;
