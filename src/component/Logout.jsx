import { useHistory } from "react-router-dom";

const Logout = ({
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
  return (
    <div style={elStyling}>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
};

export default Logout;
