const Character = ({
  hairColor,
  skinColor,
  shirtColor,
  pantsColor,
  shoeColor,
  nickname,
}) => {
  const elStyling = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px 0",
  };
  return (
    <div style={elStyling}>
      <h2>{nickname}</h2>
      <div
        style={{ backgroundColor: hairColor, width: "50px", height: "50px" }}
      ></div>
      <div
        style={{ backgroundColor: skinColor, width: "50px", height: "50px" }}
      ></div>
      <div
        style={{ backgroundColor: shirtColor, width: "50px", height: "50px" }}
      ></div>
      <div
        style={{ backgroundColor: pantsColor, width: "50px", height: "50px" }}
      ></div>
      <div
        style={{ backgroundColor: shoeColor, width: "50px", height: "50px" }}
      ></div>
    </div>
  );
};

export default Character;
