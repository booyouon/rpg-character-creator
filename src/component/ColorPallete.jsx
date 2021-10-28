import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import axios from "axios";

const ColorPallete = ({
  id,
  API_URL,
  username,
  password,
  nickname,

  setCapColor,
  setFaceColor,
  setCapShading,
  setFaceShading,
  setEyeColor,
  setCheeksColor,
  setDotColor,

  tempCap,
  tempFace,
  tempCapShading,
  tempFaceShading,
  tempEye,
  tempCheeks,
  tempDot,
  setTempCap,
  setTempFace,
  setTempCapShading,
  setTempFaceShading,
  setTempEye,
  setTempCheeks,
  setTempDot,
}) => {
  const handleSubmit = async (ev) => {
    ev.preventDefault();

    setCapColor(tempCap);
    setFaceColor(tempFace);
    setCapShading(tempCapShading);
    setFaceShading(tempFaceShading);
    setEyeColor(tempEye);
    setCheeksColor(tempCheeks);
    setDotColor(tempDot);
    const editData = {
      records: [
        {
          id: id,
          fields: {
            username: username,
            password: password,
            nickname: nickname,
            capcolor: tempCap,
            facecolor: tempFace,
            capshading: tempCapShading,
            faceshading: tempFaceShading,
            eyecolor: tempEye,
            cheekscolor: tempCheeks,
            dotcolor: tempDot,
          },
        },
      ],
    };
    await axios.put(API_URL, editData);
  };
  const elStyling = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px 0",
  };
  const inputStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: "15px",
  };
  const buttonStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  };
  return (
    <div>
      <form onSubmit={handleSubmit} style={elStyling}>
        <div style={inputStyle}>
          <label htmlFor="capcolor">Cap Color</label>
          <input
            name="capcolor"
            id="capcolor"
            type="color"
            value={tempCap}
            onChange={(ev) => setTempCap(ev.target.value)}
          ></input>
        </div>
        <div style={inputStyle}>
          <label htmlFor="capshading">Cap Shading</label>
          <input
            name="capshading"
            id="capshading"
            type="color"
            value={tempCapShading}
            onChange={(ev) => setTempCapShading(ev.target.value)}
          ></input>
        </div>
        <div style={inputStyle}>
          <label htmlFor="dotcolor">Dots Color</label>
          <input
            name="dotcolor"
            id="dotcolor"
            type="color"
            value={tempDot}
            onChange={(ev) => setTempDot(ev.target.value)}
          ></input>
        </div>
        <div style={inputStyle}>
          <label htmlFor="facecolor">Face Color</label>
          <input
            name="facecolor"
            id="facecolor"
            type="color"
            value={tempFace}
            onChange={(ev) => setTempFace(ev.target.value)}
          ></input>
        </div>
        <div style={inputStyle}>
          <label htmlFor="faceshading">Face Shading</label>
          <input
            name="faceshading"
            id="faceshading"
            type="color"
            value={tempFaceShading}
            onChange={(ev) => setTempFaceShading(ev.target.value)}
          ></input>
        </div>
        <div style={inputStyle}>
          <label htmlFor="eyecolor">Eye Color</label>
          <input
            name="eyecolor"
            id="eyecolor"
            type="color"
            value={tempEye}
            onChange={(ev) => setTempEye(ev.target.value)}
          ></input>
        </div>
        <div style={inputStyle}>
          <label htmlFor="cheekscolor">Cheeks Color</label>
          <input
            name="cheekscolor"
            id="cheekscolor"
            type="color"
            value={tempCheeks}
            onChange={(ev) => setTempCheeks(ev.target.value)}
          ></input>
        </div>
        <div style={buttonStyle}>
          <Button
            variant="contained"
            type="submit"
            value="Save"
            color="secondary"
          >
            Save
          </Button>

          <Link style={{ textDecoration: "none" }} to="/start">
            <Button variant="contained">Home</Button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ColorPallete;