import { Redirect } from "react-router-dom";

const CreateUser = ({
  username,
  password,
  setUsername,
  setPassword,
  authenticated,
}) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log("clicked");
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
          <input type="submit" value="Log in" />
        </form>
      ) : (
        <Redirect to={{ pathname: "/logout" }} />
      )}
    </div>
  );
};

export default CreateUser;
