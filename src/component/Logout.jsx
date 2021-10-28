import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";
const Logout = ({
  setUsername,
  setPassword,
  setUserSearch,
  toggleFetch,
  setToggleFetch,
  setAuthenticated,
}) => {
  const history = useHistory();

  const handleLogout = (ev) => {
    ev.preventDefault();
    // username isn't case sensitive when submitted so I used a toLowerCase method in order to avoid case sensitivtiy
    setUserSearch(" ");
    setPassword("");
    setUsername("");
    setAuthenticated(false);
    setToggleFetch(!toggleFetch);
    history.push("/");
  };
  const buttonStyle = {
    width: "200px",
  };
  return (
    <div>
      <Button style={buttonStyle} color="error" onClick={handleLogout}>
        Log out
      </Button>
    </div>
  );
};

export default Logout;
