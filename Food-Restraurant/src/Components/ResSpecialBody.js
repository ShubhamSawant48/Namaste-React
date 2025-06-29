import { addItem } from "../utils/cartSlice";
import { ACCIMG } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";

const ResSpecialBody = ({ data }) => {
  // console.log(data);

  // const innerData = data.card.info;
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleAddItem = (item) => {
    dispatch(addItem(item));
    console.log(cartItems);
  };

  return (
    <div>
      {data.map((item) => (
        <div key={item.card.info.id} className="h-55 border-b-1 p-2 flex">
          <div className="w-200">
            {item.card.info.itemAttribute.vegClassifier === "VEG" ? "🟢" : "🔴"}
            <br />
            <span className="font-semibold">{item.card.info.name}</span> <br />
            <span className="font-bold">
              {" "}
              ₹{" "}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </span>
            <br />
            <span className="text-green-700">
              ⭐{item.card.info.ratings.aggregatedRating.rating}(
              {item.card.info.ratings.aggregatedRating.ratingCountV2})
            </span>
            <p className="text-sm">{item.card.info.description}</p>
          </div>
          <div>
            <button
              type="button"
              className="cursor-pointer bg-gray-100 shadow-2xl shadow-black font-extrabold text-green-600 ml-15 my-40 px-5 py-2.5 rounded-xl absolute"
              onClick={() => handleAddItem(item)}
            >
              Add +
            </button>
            <img
              src={
                ACCIMG + item.card.info.imageId || ACCIMG + item.card.info.image
              }
              className="w-80 h-45 rounded-3xl"
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ResSpecialBody;
