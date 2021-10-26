import "./App.css";
import { Link, Route, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Auth from "./component/Auth";
import Welcome from "./component/Welcome";
import CreateUser from "./component/CreateUser";
import Start from "./component/Start";
import CharacterCreation from "./component/CharacterCreation";
import Sprite from "./component/sprite/Sprite";

const API_URL =
  "https://api.airtable.com/v0/apps2LmH1EFxMOZEB/Table%201?api_key=keyU3JZHRhRaUZpsv";
function App() {
  const [userData, setUserData] = useState([]);
  const [userSearch, setUserSearch] = useState(" ");
  const [authenticated, setAuthenticated] = useState(false);
  const [toggleFetch, setToggleFetch] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [capColor, setCapColor] = useState("#ac3232");
  const [faceColor, setFaceColor] = useState("#eec39f");
  const [capShading, setCapShading] = useState("#d95763");
  const [faceShading, setFaceShading] = useState("#d9a066");
  const [eyeColor, setEyeColor] = useState("#0A0A0A");
  const [cheeksColor, setCheeksColor] = useState("#FFC0CB");
  const [dotColor, setDotColor] = useState("#D3D3D3");
  const history = useHistory();

  useEffect(() => {
    const getUserData = async () => {
      const res = await axios.get(
        `${API_URL}&filterByFormula=({username}='${userSearch}')`
      );
      console.log(res.data.records[0]);
      if (
        res.data.records[0] &&
        res.data.records[0].fields.password === password
      ) {
        console.log("Login Successful");
        setAuthenticated(true);
        setUserData(res.data.records[0]);
        setCapColor(res.data.records[0].fields.capcolor);
        setFaceColor(res.data.records[0].fields.facecolor);
        setCapShading(res.data.records[0].fields.capshading);
        setFaceShading(res.data.records[0].fields.faceshading);
        setEyeColor(res.data.records[0].fields.eyecolor);
        setCheeksColor(res.data.records[0].fields.cheekscolor);
        setDotColor(res.data.records[0].fields.dotcolor);
        setNickname(res.data.records[0].fields.nickname);
        history.push("/start");
      } else {
        console.log("Login Failed. Please check your username or password.");
      }
    };
    getUserData();
  }, [toggleFetch]);

  return (
    <div className="App">
      <Link to="/start">poop</Link>
      <Route exact path="/">
        <Welcome authenticated={authenticated} />
      </Route>
      <Route exact path="/login">
        <Auth
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
          setUserSearch={setUserSearch}
          toggleFetch={toggleFetch}
          setToggleFetch={setToggleFetch}
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
      <Route exact path="/newuser">
        <CreateUser
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
          authenticated={authenticated}
          API_URL={API_URL}
          setUserSearch={setUserSearch}
          toggleFetch={toggleFetch}
          setToggleFetch={setToggleFetch}
        />
      </Route>
      <Route exact path="/start">
        <Start authenticated={authenticated} />
      </Route>
      <Route exact path="/character">
        <CharacterCreation
          id={userData.id}
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
          authenticated={authenticated}
          username={username}
          password={password}
          nickname={nickname}
        />
      </Route>
    </div>
  );
}

export default App;
