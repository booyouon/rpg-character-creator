import { Link, Route, Redirect } from "react-router-dom";
import { Button } from "@mui/material";
import Logout from "./Logout";
const Start = ({
  nickname,
  setUsername,
  setPassword,
  setUserSearch,
  toggleFetch,
  setToggleFetch,
  authenticated,
  setAuthenticated,
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
          <Button style={buttonStyle} variant="contained" color="secondary">
            Start
          </Button>
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
