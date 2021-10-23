const ColorPallete = ({
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
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="haircolor">Hair Color</label>
        <input
          name="haircolor"
          id="haircolor"
          type="color"
          value={hairColor}
          onChange={(ev) => setHairColor(ev.target.value)}
        ></input>

        <label htmlFor="skincolor">Skin Color</label>
        <input
          name="skincolor"
          id="skincolor"
          type="color"
          value={skinColor}
          onChange={(ev) => setSkinColor(ev.target.value)}
        ></input>

        <label htmlFor="shirtcolor">Shirt Color</label>
        <input
          name="shirtcolor"
          id="shirtcolor"
          type="color"
          value={shirtColor}
          onChange={(ev) => setShirtColor(ev.target.value)}
        ></input>

        <label htmlFor="pantscolor">Pants Color</label>
        <input
          name="pantscolor"
          id="pantscolor"
          type="color"
          value={pantsColor}
          onChange={(ev) => setPantsColor(ev.target.value)}
        ></input>

        <label htmlFor="shoecolor">Shoe Color</label>
        <input
          name="shoecolor"
          id="shoecolor"
          type="color"
          value={shoeColor}
          onChange={(ev) => setShoeColor(ev.target.value)}
        ></input>
        <input type="submit" value="Save"></input>
      </form>
    </div>
  );
};

export default ColorPallete;
