import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Login from "./component/Login";
import CharacterCreation from "./component/CharacterCreation";
import Welcome from "./component/Welcome";

const API_URL =
  "https://api.airtable.com/v0/apps2LmH1EFxMOZEB/Table%201?api_key=keyU3JZHRhRaUZpsv";
//https://api.airtable.com/v0/apps2LmH1EFxMOZEB/Table%201?api_key=keyU3JZHRhRaUZpsv&filterByFormula=({nickname} = 'V')
function App() {
  const [userData, setUserData] = useState(" ");
  const [authenticated, setAuthenticated] = useState(false);
  const [toggleFetch, setToggleFetch] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [hairColor, setHairColor] = useState("#000000");
  const [skinColor, setSkinColor] = useState("#E8BEAC");
  const [shirtColor, setShirtColor] = useState("#0000FF");
  const [pantsColor, setPantsColor] = useState("#808080");
  const [shoeColor, setShoeColor] = useState("#654321");

  useEffect(() => {
    const getAirData = async () => {
      const res = await axios.get(
        `${API_URL}&filterByFormula=({username}='${userData}')`
      );
      console.log(res.data);
      console.log(res.data.records[0]);
      if (
        res.data.records[0] &&
        res.data.records[0].fields.password == password
      ) {
        console.log("Login Successful");
        setAuthenticated(true);
        setHairColor(res.data.records[0].fields.haircolor);
        setSkinColor(res.data.records[0].fields.skincolor);
        setShirtColor(res.data.records[0].fields.shirtcolor);
        setPantsColor(res.data.records[0].fields.pantscolor);
        setShoeColor(res.data.records[0].fields.shoecolor);
      } else {
        console.log("Login Failed. Please check your username or password.");
      }
    };
    getAirData();
  }, [toggleFetch]);

  return (
    <div className="App">
      <Login
        username={username}
        password={password}
        setUsername={setUsername}
        setPassword={setPassword}
        setUserData={setUserData}
        toggleFetch={toggleFetch}
        setToggleFetch={setToggleFetch}
      />
      <Welcome />
      <CharacterCreation
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
