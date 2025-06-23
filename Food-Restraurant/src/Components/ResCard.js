import { RESCARDLOGO_URL } from "../utils/constants";

const ResCard = ({ data }) => {
  const resData = data;
  // console.log(data);

  return (
    <div>
      <div className="w-70 h-80 mx-1 border-1 border-black p-3 rounded-md hover:border-2 hover:border-red-500">
        <img
          src={RESCARDLOGO_URL + resData.cloudinaryImageId}
          className="w-65 h-40"
        ></img>
        <h2 className="font-bold">{resData.name}</h2>
        <h2 style={{ padding: "0px" }}>{resData.areaName}</h2>
        {/* <h3>{resData.area}</h3> */}
        <h4>{resData.cuisines.join(", ")}</h4>
        <h4>{resData.avgRating} Star</h4>
      </div>
    </div>
  );
};

export default ResCard;
