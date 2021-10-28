import { Link, Redirect } from "react-router-dom";
import { Button } from "@mui/material";
const Welcome = ({ authenticated }) => {
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
        <Redirect to={{ pathname: "/start" }} />
      ) : (
        <div>
          <h1>Mushy</h1>

          <Link to="/login" style={linkStyling}>
            <Button variant="contained">Continue</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Welcome;
