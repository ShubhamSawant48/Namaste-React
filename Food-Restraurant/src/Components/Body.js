import ResCard from "./ResCard.js";
import { useState, useEffect } from "react";
import { SWIIGGYAPI } from "../utils/constants.js";

const Body = () => {
  let [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIIGGYAPI);

    const json = await data.json();

    console.log(json);

    setRestaurantList(json?.data?.cards[3]?.card?.card?.info || []);
  };

  return (
    <div>
      <div className="search" style={{ padding: "10px" }}>
        Search
      </div>
      <div className="bodyComponent">
        {restaurantList.map((item) => (
          <ResCard key={item.id} resData={item} />
        ))}
      </div>
    </div>
  );
};

export default Body;
