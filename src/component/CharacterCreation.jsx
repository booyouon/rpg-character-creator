import Character from "./Character";
import ColorPallete from "./ColorPallete";
import { Redirect } from "react-router-dom";
import { useState } from "react";
import { Alert } from "@mui/material";

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
  highscore,
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
  const [tempEye, setTempEye] = useState(eyeColor);
  const [tempCheeks, setTempCheeks] = useState(cheeksColor);
  const [tempDot, setTempDot] = useState(dotColor);
  const [saved, setSaved] = useState(false);

  return (
    <div>
      {authenticated ? (
        <div style={elStyling}>
          <Alert
            style={{ display: saved ? "block" : "none" }}
            severity="success"
          >
            Character changes saved!
          </Alert>
          <Character
            capColor={tempCap}
            faceColor={tempFace}
            capShading={tempCapShading}
            faceShading={tempFaceShading}
            eyeColor={tempEye}
            cheeksColor={tempCheeks}
            dotColor={tempDot}
            nickname={nickname}
          />
          <ColorPallete
            id={id}
            API_URL={API_URL}
            highscore={highscore}
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
            tempCap={tempCap}
            tempFace={tempFace}
            tempCapShading={tempCapShading}
            tempFaceShading={tempFaceShading}
            tempEye={tempEye}
            tempCheeks={tempCheeks}
            tempDot={tempDot}
            setTempCap={setTempCap}
            setTempFace={setTempFace}
            setTempCapShading={setTempCapShading}
            setTempFaceShading={setTempFaceShading}
            setTempEye={setTempEye}
            setTempCheeks={setTempCheeks}
            setTempDot={setTempDot}
            setSaved={setSaved}
          />
        </div>
      ) : (
        <Redirect to={{ pathname: "/" }} />
      )}
    </div>
  );
};

export default CharacterCreation;
