import { ACCIMG } from "../utils/constants";

const ResSpecialBody = ({ data }) => {
  // console.log(data);

  const innerData = data.card.info;
  return (
    <div className="h-55 border-b-1 p-2 flex">
      <div className="w-200">
        {innerData.itemAttribute.vegClassifier === "VEG" ? "🟢" : "🔴"}
        <br />
        <span>{data.card.info.name}</span> <br />
        <span> ₹ {innerData.price / 100}</span>
        <br />
        <span>
          ⭐{innerData.ratings.aggregatedRating.rating}(
          {innerData.ratings.aggregatedRating.ratingCountV2})
        </span>
        <p>{innerData.description}</p>
      </div>
      <div>
        <img
          src={ACCIMG + innerData.imageId || innerData.image}
          className="w-80 h-45 rounded-3xl"
        ></img>
      </div>
    </div>
  );
};
export default ResSpecialBody;
