import { Link } from "react-router-dom";
import axios from "axios";

const ColorPallete = ({
  id,
  setHairColor,
  setSkinColor,
  setShirtColor,
  setPantsColor,
  setShoeColor,
  API_URL,
  username,
  password,
  nickname,
  tempHair,
  tempSkin,
  tempShirt,
  tempPants,
  tempShoe,
  setTempHair,
  setTempSkin,
  setTempShirt,
  setTempPants,
  setTempShoe,
}) => {
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setHairColor(tempHair);
    setSkinColor(tempSkin);
    setShirtColor(tempShirt);
    setPantsColor(tempPants);
    setShoeColor(tempShoe);
    const editData = {
      records: [
        {
          id: id,
          fields: {
            username: username,
            password: password,
            nickname: nickname,
            shirtcolor: tempShirt,
            pantscolor: tempPants,
            haircolor: tempHair,
            skincolor: tempSkin,
            shoecolor: tempShoe,
          },
        },
      ],
    };
    await axios.put(API_URL, editData);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="haircolor">Hair Color</label>
        <input
          name="haircolor"
          id="haircolor"
          type="color"
          value={tempHair}
          onChange={(ev) => setTempHair(ev.target.value)}
        ></input>

        <label htmlFor="skincolor">Skin Color</label>
        <input
          name="skincolor"
          id="skincolor"
          type="color"
          value={tempSkin}
          onChange={(ev) => setTempSkin(ev.target.value)}
        ></input>

        <label htmlFor="shirtcolor">Shirt Color</label>
        <input
          name="shirtcolor"
          id="shirtcolor"
          type="color"
          value={tempShirt}
          onChange={(ev) => setTempShirt(ev.target.value)}
        ></input>

        <label htmlFor="pantscolor">Pants Color</label>
        <input
          name="pantscolor"
          id="pantscolor"
          type="color"
          value={tempPants}
          onChange={(ev) => setTempPants(ev.target.value)}
        ></input>

        <label htmlFor="shoecolor">Shoe Color</label>
        <input
          name="shoecolor"
          id="shoecolor"
          type="color"
          value={tempShoe}
          onChange={(ev) => setTempShoe(ev.target.value)}
        ></input>
        <input type="submit" value="Save"></input>
        <Link to="/start">
          <button>Home</button>
        </Link>
      </form>
    </div>
  );
};

export default ColorPallete;
