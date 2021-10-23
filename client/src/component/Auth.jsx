import Logout from "./Logout";
import Login from "./Login";

const Auth = ({
  username,
  password,
  setUsername,
  setPassword,
  setUserData,
  toggleFetch,
  setToggleFetch,
  authenticated,
  setAuthenticated,
}) => {
  return (
    <div>
      {authenticated ? (
        <Logout
          setUsername={setUsername}
          setPassword={setPassword}
          setUserData={setUserData}
          toggleFetch={toggleFetch}
          setToggleFetch={setToggleFetch}
          setAuthenticated={setAuthenticated}
        />
      ) : (
        <Login
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
          setUserData={setUserData}
          toggleFetch={toggleFetch}
          setToggleFetch={setToggleFetch}
        />
      )}
    </div>
  );
};

export default Auth;
