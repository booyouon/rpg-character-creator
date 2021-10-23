const CharacterCreation = ({
  hairColor,
  skinColor,
  shirtColor,
  pantsColor,
  shoeColor,
  setHairColor,
  setSkinColor,
  setShirtColor,
  setPantsColor,
  setShoeColor,
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
      <Character
        hairColor={hairColor}
        skinColor={skinColor}
        shirtColor={shirtColor}
        pantsColor={pantsColor}
        shoeColor={shoeColor}
      />
      <ColorPallete
        hairColor={hairColor}
        skinColor={skinColor}
        shirtColor={shirtColor}
        pantsColor={pantsColor}
        shoeColor={shoeColor}
        setHairColor={setHairColor}
        setSkinColor={setSkinColor}
        setShirtColor={setShirtColor}
        setPantsColor={setPantsColor}
        setShoeColor={setShoeColor}
      />
    </div>
  );
};

export default CharacterCreation;
