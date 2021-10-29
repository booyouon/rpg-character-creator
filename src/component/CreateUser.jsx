import { Redirect } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";

const CreateUser = ({
  username,
  password,
  setUsername,
  setPassword,
  authenticated,
  API_URL,
  setUserSearch,
  toggleFetch,
  setToggleFetch,
}) => {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const addUser = async () => {
    const newUser = {
      records: [
        {
          fields: {
            password: password,
            nickname: nickname,
            username: username.toLowerCase(),
            capcolor: "#f35269",
            capshading: "#d1465a",
            facecolor: "#debca4",
            faceshading: "#5w2854",
            eyecolor: "#ffffff",
            cheekscolor: "#faccd2",
            dotcolor: "#000000",
            highscore: "0",
          },
        },
      ],
    };
    await axios.post(API_URL, newUser);
    setUserSearch(username.toLowerCase());
    setToggleFetch(!toggleFetch);
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const res = await axios.get(
      `${API_URL}&filterByFormula=({username}='${username.toLowerCase()}')`
    );
    res.data.records[0] ? console.log("user cannot be used") : addUser();
  };

  return (
    <div>
      {!authenticated ? (
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "50vw", minWidth: "250px" },
          }}
          noValidate
          onSubmit={handleSubmit}
          autoComplete="off"
          autoSave="off"
        >
          <div>
            <TextField
              value={username}
              name="username"
              id="username"
              type="text"
              onChange={(ev) => setUsername(ev.target.value.trim())}
              label="Username"
              required
            ></TextField>
            <TextField
              value={nickname}
              name="nickname"
              id="nickname"
              type="text"
              onChange={(ev) => setNickname(ev.target.value.trim())}
              label="Nickname"
              required
            ></TextField>
            <TextField
              value={password}
              name="password"
              id="password"
              type="password"
              onChange={(ev) => setPassword(ev.target.value.trim())}
              label="Password"
              required
            ></TextField>
            <TextField
              value={confirmPassword}
              name="confirmPassword"
              id="confirmPassword"
              type="password"
              onChange={(ev) => setConfirmPassword(ev.target.value.trim())}
              label="Confirm Password"
              required
            ></TextField>
          </div>
          <Button
            variant="outlined"
            color="secondary"
            type="submit"
            value="Log in"
            disabled={
              username.length === 0 ||
              password.length === 0 ||
              password !== confirmPassword
                ? true
                : false
            }
          >
            Create User
          </Button>
        </Box>
      ) : (
        <Redirect to={{ pathname: "/logout" }} />
      )}
    </div>
  );
};

export default CreateUser;
