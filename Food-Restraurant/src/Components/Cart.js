import { useSelector } from "react-redux";
import { ACCIMG } from "../utils/constants";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div>
      {cartItems.map((item) => (
        <div
          key={item.card.info.name}
          className="w-6/12 h-50 border mx-auto mt-15"
        >
          <div className="flex p-5">
            <img
              src={
                ACCIMG + item.card.info.imageId || ACCIMG + item.card.info.image
              }
              className="w-50 h-40 rounded-3xl"
            ></img>
            <div></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
