import Character from "./Character";
import ColorPallete from "./ColorPallete";
import { Redirect } from "react-router-dom";
import { useState } from "react";

const CharacterCreation = ({
  id,
  capColor,
  setCapColor,
  faceColor,
  setFaceColor,
  capShading,
  setCapShading,
  faceShading,
  setFaceShading,
  eyeColor,
  setEyeColor,
  cheeksColor,
  setCheeksColor,
  dotColor,
  setDotColor,
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

  const [tempCap, setTempCap] = useState(capColor);
  const [tempFace, setTempFace] = useState(faceColor);
  const [tempCapShading, setTempCapShading] = useState(capShading);
  const [tempFaceShading, setTempFaceShading] = useState(faceShading);
  const [tempEyeColor, setTempEyeColor] = useState(eyeColor);
  const [tempEyeColor, setTempEyeColor] = useState(eyeColor);
  const [tempEyeColor, setTempEyeColor] = useState(eyeColor);
  const [tempEyeColor, setTempEyeColor] = useState(eyeColor);

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
            capColor={capColor}
            setCapColor={setCapColor}
            faceColor={faceColor}
            setFaceColor={setFaceColor}
            capShading={capShading}
            setCapShading={setCapShading}
            faceShading={faceShading}
            setFaceShading={setFaceShading}
            eyeColor={eyeColor}
            setEyeColor={setEyeColor}
            cheeksColor={cheeksColor}
            setCheeksColor={setCheeksColor}
            dotColor={dotColor}
            setDotColor={setDotColor}
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
