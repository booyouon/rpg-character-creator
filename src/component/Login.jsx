import { Button, Alert, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
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
  const [tempPass, setTempPass] = useState("");
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
    setAttempt((attempt) => attempt + 1);
    setPassword(tempPass);
    setUserSearch(username.toLowerCase());
    // username isn't case sensitive when submitted so I used a toLowerCase method in order to avoid case sensitivtiy
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
          value={tempPass}
          label="Password"
          name="password"
          id="password"
          type="password"
          onChange={(ev) => setTempPass(ev.target.value)}
          required
        ></TextField>
        <div style={{ marginTop: "25px" }}>
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
        <Link style={{ textDecoration: "none" }} to="/start">
          <Button color="error">Skip</Button>
        </Link>
      </Box>
    </div>
  );
};

export default Login;
