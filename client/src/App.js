import "./App.css";
import { Link, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Auth from "./component/Auth";
import CharacterCreation from "./component/CharacterCreation";
import Welcome from "./component/Welcome";
import { useHistory } from "react-router-dom";

const API_URL =
  "https://api.airtable.com/v0/apps2LmH1EFxMOZEB/Table%201?api_key=keyU3JZHRhRaUZpsv";
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
  const history = useHistory();

  useEffect(() => {
    const getAirData = async () => {
      const res = await axios.get(
        `${API_URL}&filterByFormula=({username}='${userData}')`
      );
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
        history.push("/character");
      } else {
        console.log("Login Failed. Please check your username or password.");
      }
    };
    getAirData();
  }, [toggleFetch]);

  return (
    <div className="App">
      <Link to="/login">poop</Link>
      <Route exact path="/">
        <Welcome
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
          setUserData={setUserData}
          toggleFetch={toggleFetch}
          setToggleFetch={setToggleFetch}
          authenticated={authenticated}
        />
      </Route>
      <Route exact path="/login">
        <Auth
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
          setUserData={setUserData}
          toggleFetch={toggleFetch}
          setToggleFetch={setToggleFetch}
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
      <Route exact path="/character">
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
          authenticated={authenticated}
        />
      </Route>
    </div>
  );
}

export default App;
