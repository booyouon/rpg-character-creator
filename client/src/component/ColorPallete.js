import { useState } from "react";
import "./App.css";

const ColorPallete = () => {
  const [hairColor, setHairColor] = useState("#000000");
  const [skinColor, setSkinColor] = useState("#E8BEAC");
  const [shirtColor, setShirtColor] = useState("#0000FF");
  const [pantsColor, setPantsColor] = useState("#808080");
  const [shoeColor, setShoeColor] = useState("#654321");

  return (
    <div>
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

      <label htmlFor="pantscolor">Hair Color</label>
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
    </div>
  );
};

export default ColorPallete;
