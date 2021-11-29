import { Link } from "react-router-dom";
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
  const buttonStyleEdit = {
    display: !authenticated && "none",
    width: "300px",
  };
  const buttonStyleLog = {
    width: "300px",
  };
  const buttonStyleLeader = {
    width: "300px",
    backgroundColor: "#063e8b",
  };
  return (
    <div style={elStyling}>
      <div style={elStyling}>
        <h1>Welcome, {authenticated ? nickname : "guest"}!</h1>
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
          authenticated={authenticated}
        />
        <Link to="/character" style={linkStyling}>
          <Button style={buttonStyleEdit} variant="contained">
            Edit Character
          </Button>
        </Link>
        <Link to="/leaderboards" style={linkStyling}>
          <Button style={buttonStyleLeader} variant="contained">
            Leaderboards
          </Button>
        </Link>
        {authenticated ? (
          <Logout
            setUsername={setUsername}
            setPassword={setPassword}
            setUserSearch={setUserSearch}
            toggleFetch={toggleFetch}
            setToggleFetch={setToggleFetch}
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
            setHighscore={setHighscore}
          />
        ) : (
          <Link style={{ textDecoration: "none" }} to="/">
            <Button style={buttonStyleLog} color="primary">
              Log in
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Start;
