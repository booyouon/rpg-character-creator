import { Link, Redirect } from "react-router-dom";
import { Button } from "@mui/material";
import Logout from "./Logout";
import Stage from "./Stage";
const Start = ({
  nickname,
  setUsername,
  setPassword,
  setUserSearch,
  toggleFetch,
  setToggleFetch,
  authenticated,
  setAuthenticated,
  capColor,
  faceColor,
  capShading,
  faceShading,
  eyeColor,
  cheeksColor,
  dotColor,
  highscore,
  setHighscore,
  username,
  password,
  id,
  API_URL,
}) => {
  const elStyling = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px 0",
  };
  const linkStyling = {
    textDecoration: "none",
  };
  const buttonStyle = {
    width: "300px",
  };
  return (
    <div style={elStyling}>
      {authenticated ? (
        <div style={elStyling}>
          <h1>Welcome, {nickname}!</h1>
          <Stage
            capColor={capColor}
            faceColor={faceColor}
            capShading={capShading}
            faceShading={faceShading}
            eyeColor={eyeColor}
            cheeksColor={cheeksColor}
            dotColor={dotColor}
            highscore={highscore}
            setHighscore={setHighscore}
            username={username}
            password={password}
            id={id}
            API_URL={API_URL}
            nickname={nickname}
          />
          <Link to="/character" style={linkStyling}>
            <Button style={buttonStyle} variant="contained">
              Edit Character
            </Button>
          </Link>
          <Logout
            setUsername={setUsername}
            setPassword={setPassword}
            setUserSearch={setUserSearch}
            toggleFetch={toggleFetch}
            setToggleFetch={setToggleFetch}
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </div>
      ) : (
        <Redirect to={{ pathname: "/" }} />
      )}
    </div>
  );
};

export default Start;
