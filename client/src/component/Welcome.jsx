import { Link, Redirect } from "react-router-dom";

const Welcome = ({ authenticated }) => {
  const elStyling = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px 0",
  };
  return (
    <div style={elStyling}>
      {authenticated ? (
        <Redirect to={{ pathname: "/start" }} />
      ) : (
        <Link to="/login">
          <button>Login</button>
        </Link>
      )}
    </div>
  );
};

export default Welcome;
