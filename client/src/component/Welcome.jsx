import { Link } from "react-router-dom";

const Welcome = ({}) => {
  const elStyling = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px 0",
  };
  return (
    <div style={elStyling}>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
};

export default Welcome;
