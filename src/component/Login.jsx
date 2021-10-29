import { Button, Alert, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
const Login = ({
  username,
  password,
  setUsername,
  setPassword,
  setUserSearch,
  toggleFetch,
  setToggleFetch,
  loginFailed,
  attempt,
  setAttempt,
}) => {
  const elStyling = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px 0",
  };
  const buttonStyle = {
    width: "200px",
  };
  const linkStyling = {
    textDecoration: "none",
  };
  const handleLogin = (ev) => {
    ev.preventDefault();
    // username isn't case sensitive when submitted so I used a toLowerCase method in order to avoid case sensitivtiy
    setAttempt(attempt + 1);
    console.log(attempt);
    setUserSearch(username.toLowerCase());
    setToggleFetch(!toggleFetch);
  };
  return (
    <div>
      <Box
        style={elStyling}
        component="form"
        autoComplete="off"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "50vw", minWidth: "250px" },
        }}
        noValidate
        onSubmit={handleLogin}
      >
        <Alert
          style={{ display: loginFailed ? "block" : "none" }}
          severity="error"
        >
          Incorrect username or password.
        </Alert>
        <TextField
          value={username}
          label="Username"
          name="username"
          id="username"
          onChange={(ev) => setUsername(ev.target.value)}
          required
        ></TextField>
        <TextField
          value={password}
          label="Password"
          name="password"
          id="password"
          type="password"
          onChange={(ev) => setPassword(ev.target.value)}
          required
        ></TextField>
        <div style={{ marginTop: "50px" }}>
          <Button
            style={buttonStyle}
            variant="contained"
            type="submit"
            color="secondary"
          >
            Log in
          </Button>
          <Link to="/newuser" style={linkStyling}>
            <Button style={buttonStyle} variant="contained" color="success">
              Create New Account
            </Button>
          </Link>
        </div>
      </Box>
    </div>
  );
};

export default Login;
