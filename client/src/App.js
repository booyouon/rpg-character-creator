import "./App.css";
import Character from "./component/Character";
import ColorPallete from "./component/ColorPallete";
import { useEffect, useState } from "react";
import axios from "axios";

const API_URL =
  "https://api.airtable.com/v0/apps2LmH1EFxMOZEB/Table%201?api_key=keyU3JZHRhRaUZpsv";

function App() {
  const [userData, setUserData] = useState([]);
  const [hairColor, setHairColor] = useState("#000000");
  const [skinColor, setSkinColor] = useState("#E8BEAC");
  const [shirtColor, setShirtColor] = useState("#0000FF");
  const [pantsColor, setPantsColor] = useState("#808080");
  const [shoeColor, setShoeColor] = useState("#654321");

  useEffect(() => {
    const getAirData = async () => {
      const res = await axios.get(API_URL);
      console.log(res.data);
      console.log(res.data.records[0]);
      setUserData(res.data.records[0]);
      setHairColor(res.data.records[0].fields.haircolor);
    };
    getAirData();
  }, []);

  return (
    <div className="App">
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
  );
}

export default App;
