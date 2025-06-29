import { useDispatch, useSelector } from "react-redux";
import { ACCIMG } from "../utils/constants";
import { deleteItem, clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleRemItem = (item) => {
    dispatch(deleteItem(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="w-6/12 h-auto mx-auto">
      <button
        className="border-1 bg-black text-white p-2 rounded-2xl block mx-auto my-3 cursor-pointer hover:text-red-500"
        onClick={() => handleClearCart()}
      >
        Clear Cart
      </button>
      {cartItems.map((item) => (
        <div
          className="w-full h-50 border-y-2 border-amber-200 "
          key={item.card.info.name}
        >
          <div className="flex p-5 2/6">
            <img
              src={
                ACCIMG + item.card.info.imageId || ACCIMG + item.card.info.image
              }
              className="w-50 h-40 rounded-3xl"
            ></img>
            <div className="text-center w-4/6">
              <span className="font-bold text-2xl m-2">
                {item.card.info.itemAttribute.vegClassifier === "VEG"
                  ? "🟢"
                  : "🔴"}
                {item.card.info.name}
              </span>
              <br />
              <span className="font-semibold m-3">
                Cost of Food : ₹{" "}
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
              <br />
              <button
                className="bg-black text-white shadow-2xl p-2 rounded-2xl m-3 cursor-pointer hover:text-yellow-500"
                onClick={() => handleRemItem(item)}
              >
                {" "}
                Delete This
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
