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
      <button>Start Game</button>
    </div>
  );
};

export default Welcome;
