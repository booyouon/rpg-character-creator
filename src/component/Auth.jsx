import Logout from "./Logout";
import Login from "./Login";
import { Link, Route, Redirect } from "react-router-dom";

const Auth = ({
  username,
  password,
  setUsername,
  setPassword,
  setUserSearch,
  toggleFetch,
  setToggleFetch,
  authenticated,
  setAuthenticated,
}) => {
  const authStyling = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={authStyling}>
      {!authenticated ? (
        <Login
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
          setUserSearch={setUserSearch}
          toggleFetch={toggleFetch}
          setToggleFetch={setToggleFetch}
        />
      ) : (
        <Logout
          setUsername={setUsername}
          setPassword={setPassword}
          setUserSearch={setUserSearch}
          toggleFetch={toggleFetch}
          setToggleFetch={setToggleFetch}
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      )}
    </div>
  );
};

export default Auth;
