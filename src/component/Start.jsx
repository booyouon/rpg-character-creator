import { Link, Route, Redirect } from "react-router-dom";
import { Button } from "@mui/material";

const Start = ({ authenticated, nickname }) => {
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
  return (
    <div style={elStyling}>
      {authenticated ? (
        <div>
          <h1>Welcome, {nickname} </h1>
          <Link to="/character" style={linkStyling}>
            <Button variant="outlined" color="secondary">
              Edit Character
            </Button>
          </Link>
          <Button variant="outlined">Start</Button>
        </div>
      ) : (
        <Redirect to={{ pathname: "/login" }} />
      )}
    </div>
  );
};

export default Start;
