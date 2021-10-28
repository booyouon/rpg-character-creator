import { Button } from "@mui/material";

const Login = ({
  username,
  password,
  setUsername,
  setPassword,
  setUserSearch,
  toggleFetch,
  setToggleFetch,
}) => {
  const elStyling = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px 0",
  };

  const handleLogin = (ev) => {
    ev.preventDefault();
    // username isn't case sensitive when submitted so I used a toLowerCase method in order to avoid case sensitivtiy
    setUserSearch(username.toLowerCase());
    setToggleFetch(!toggleFetch);
  };
  return (
    <div>
      <form style={elStyling} onSubmit={handleLogin}>
        <label htmlFor="username">Username</label>
        <input
          value={username}
          name="username"
          id="username"
          type="text"
          onChange={(ev) => setUsername(ev.target.value)}
        ></input>
        <label htmlFor="password">Password</label>
        <input
          value={password}
          name="password"
          id="password"
          type="password"
          onChange={(ev) => setPassword(ev.target.value)}
        ></input>
        <Button variant="contained" type="submit" color="secondary">
          Log in
        </Button>
      </form>
    </div>
  );
};

export default Login;
