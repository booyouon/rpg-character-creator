import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";

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
        <Button variant="contained" type="submit" color="success">
          Log in
        </Button>
      </Box>
    </div>
  );
};

export default Login;
