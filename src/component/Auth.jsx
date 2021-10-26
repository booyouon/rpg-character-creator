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
  return (
    <div>
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
