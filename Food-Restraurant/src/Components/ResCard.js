import { RESCARDLOGO_URL } from "../utils/constants";

const ResCard = ({ data }) => {
  const resData = data.card.card.info;
  // console.log(data.card.card.info);

  return (
    <div>
      <div className="resCard">
        <img
          src={RESCARDLOGO_URL + resData.cloudinaryImageId}
          className="photos"
        ></img>
        <h1>{resData.name}</h1>
        <h2 style={{ padding: "0px" }}>{resData.areaName}</h2>
        <h3>{resData.area}</h3>
        <h4>{resData.cuisines.join(", ")}</h4>
        <h4>{resData.avgRating} Stars</h4>
      </div>
    </div>
  );
};

export default ResCard;
