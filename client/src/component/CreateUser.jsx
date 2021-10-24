import { Redirect } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

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
            shirtcolor: "#0000FF",
            password: password,
            nickname: nickname,
            pantscolor: "#808080",
            username: username.toLowerCase(),
            haircolor: "#E8BEAC",
            skincolor: "#E8BEAC",
            shoecolor: "#654321",
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
    console.log("clicked");
    const res = await axios.get(
      `${API_URL}&filterByFormula=({username}='${username.toLowerCase()}')`
    );
    res.data.records[0] ? console.log("user cannot be used") : addUser();
  };

  return (
    <div>
      {!authenticated ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            value={username}
            name="username"
            id="username"
            type="text"
            onChange={(ev) => setUsername(ev.target.value.trim())}
          ></input>
          <label htmlFor="nickname">Nickname</label>
          <input
            value={nickname}
            name="nickname"
            id="nickname"
            type="text"
            onChange={(ev) => setNickname(ev.target.value.trim())}
          ></input>
          <label htmlFor="password">Password</label>
          <input
            value={password}
            name="password"
            id="password"
            type="password"
            onChange={(ev) => setPassword(ev.target.value.trim())}
          ></input>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            value={confirmPassword}
            name="confirmPassword"
            id="confirmPassword"
            type="password"
            onChange={(ev) => setConfirmPassword(ev.target.value.trim())}
          ></input>
          <input
            type="submit"
            value="Log in"
            disabled={
              username.length === 0 ||
              password.length === 0 ||
              password !== confirmPassword
                ? true
                : false
            }
          />
        </form>
      ) : (
        <Redirect to={{ pathname: "/logout" }} />
      )}
    </div>
  );
};

export default CreateUser;
