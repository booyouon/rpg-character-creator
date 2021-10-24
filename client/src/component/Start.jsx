import { Link, Route, Redirect } from "react-router-dom";

const Start = ({ authenticated }) => {
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
        <div>
          <Link to="/character">
            <button>Edit Character</button>
          </Link>
          <button>Start</button>
        </div>
      ) : (
        <Redirect to={{ pathname: "/login" }} />
      )}
    </div>
  );
};

export default Start;
