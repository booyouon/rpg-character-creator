const Login = ({
  username,
  password,
  setUsername,
  setPassword,
  setUserData,
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

  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log(username.toLowerCase());
    // username isn't case sensitive when submitted so I used a toLowerCase method in order to avoid case sensitivtiy
    setUserData(username.toLowerCase());
    setToggleFetch(!toggleFetch);
  };
  return (
    <div style={elStyling}>
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
        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
