import { RESMENUAPI } from "../utils/constants";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ResSpecialHeader from "./ResSpecialHeader.js";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState({});
  const [rootInfo, setRootInfo] = useState({});
  const [showIndex, setShowIndex] = useState(null);

  const { resID } = useParams();
  // console.log(resID);

  const fetchMenu = async () => {
    const data = await fetch(
      RESMENUAPI + resID + "&catalog_qa=undefined&query=Pizza"
    );
    const json = await data.json();

    // console.log(json?.data?.cards[2]?.card?.card?.info);

    setResInfo(json?.data?.cards[2]?.card?.card?.info);
    setRootInfo(json?.data?.cards);
  };
  // console.log(rootInfo)

  const {
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    areaName,
    locality,
  } = resInfo;

  const accData = rootInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) =>
      c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
      c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
  );

  // console.log(accData);

  useEffect(() => {
    fetchMenu();
  }, []);

  return (
    <div>
      <div className="font-bold text-4xl my-3 text-center">
        <h1>{resInfo.name}</h1>
      </div>
      <div className="relative bg-gray-300 mx-90 w-200 h-45 rounded-3xl">
        <div className="bg-gray-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-185 h-35 rounded-lg">
          <h2 className="m-2 font-bold">
            ⭐{avgRating} ({totalRatingsString}) • {costForTwoMessage}
          </h2>
          <h2 className="m-2 font-medium">{resInfo?.cuisines?.join(", ")}</h2>
          <h2 className="m-2 font-medium">
            Area: {areaName} <br /> Locality: {locality}
          </h2>
        </div>
      </div>
      <h2 className="mt-5 text-2xl text-center">M E N U</h2>
      {accData &&
        accData.map((c, index) => (
          // <h1>{c?.card?.card?.title}</h1>
          <ResSpecialHeader
            key={c?.card?.card?.title}
            data={c}
            showItems={index == showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      {/* {console.log(accData)} */}
    </div>
  );
};
export default RestaurantMenu;
