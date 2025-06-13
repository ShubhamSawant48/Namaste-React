import ResCard from "./ResCard.js";
import { useState, useEffect } from "react";
import { SWIIGGYAPI } from "../utils/constants.js";
import { restaurantlist } from "../utils/constants.js";

const Body = () => {
  let [restaurantList, setRestaurantList] = useState([]);

  // console.log(restaurantlist);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIIGGYAPI);

    const json = await data.json();

    // console.log(json.data.cards);

    const temp = json.data.cards.splice(3, 10);

    // console.log(temp)

    // console.log(json.data.cards[3].card.card.info);

    setRestaurantList(temp || []);
  };

  console.log("DATA: ", restaurantList);

  return (
    <div>
      <div className="search" style={{ padding: "10px" }}>
        Search
      </div>
      <div className="bodyComponent">
        {restaurantList.map((res) => (
          // console.log(res)
          //  <p>hello</p>
          <ResCard data={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
