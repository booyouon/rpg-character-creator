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
        <Redirect to={{ pathname: "/logout" }} />
      )}
      <Link to="/logout">
        <Logout
          setUsername={setUsername}
          setPassword={setPassword}
          setUserSearch={setUserSearch}
          toggleFetch={toggleFetch}
          setToggleFetch={setToggleFetch}
          setAuthenticated={setAuthenticated}
        />
      </Link>
    </div>
  );
};

export default Auth;
