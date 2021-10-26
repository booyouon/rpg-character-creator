import { Link } from "react-router-dom";
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
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="capcolor">Cap Color</label>
        <input
          name="capcolor"
          id="capcolor"
          type="color"
          value={tempCap}
          onChange={(ev) => setTempCap(ev.target.value)}
        ></input>

        <label htmlFor="capshading">Cap Shading</label>
        <input
          name="capshading"
          id="capshading"
          type="color"
          value={tempCapShading}
          onChange={(ev) => setTempCapShading(ev.target.value)}
        ></input>

        <label htmlFor="dotcolor">Dots Color</label>
        <input
          name="dotcolor"
          id="dotcolor"
          type="color"
          value={tempDot}
          onChange={(ev) => setTempDot(ev.target.value)}
        ></input>

        <label htmlFor="facecolor">Face Color</label>
        <input
          name="facecolor"
          id="facecolor"
          type="color"
          value={tempFace}
          onChange={(ev) => setTempFace(ev.target.value)}
        ></input>

        <label htmlFor="faceshading">Face Shading</label>
        <input
          name="faceshading"
          id="faceshading"
          type="color"
          value={tempFaceShading}
          onChange={(ev) => setTempFaceShading(ev.target.value)}
        ></input>

        <label htmlFor="eyecolor">Eye Color</label>
        <input
          name="eyecolor"
          id="eyecolor"
          type="color"
          value={tempEye}
          onChange={(ev) => setTempEye(ev.target.value)}
        ></input>

        <label htmlFor="cheekscolor">Cheeks Color</label>
        <input
          name="cheekscolor"
          id="cheekscolor"
          type="color"
          value={tempCheeks}
          onChange={(ev) => setTempCheeks(ev.target.value)}
        ></input>

        <input type="submit" value="Save"></input>

        <Link to="/start">
          <button>Home</button>
        </Link>
      </form>
    </div>
  );
};

export default ColorPallete;
