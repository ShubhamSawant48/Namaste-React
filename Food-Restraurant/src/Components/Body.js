import ResCard from "./ResCard.js";
import { useState, useEffect } from "react";
import { SWIIGGYAPI } from "../utils/constants.js";
import Shimmer from "./Shimmer.js";

const Body = () => {
  let [restaurantList, setRestaurantList] = useState([]);
  let [filterdRestaurant, setFilterdRestaurant] = useState([]);

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

  // console.log("DATA: ", restaurantList);

  if (restaurantList.length === 0) {
    return <Shimmer />;
  }

  console.log(Shimmer);

  return (
    <div>
      <div className="searAndBtn">
        <div className="search" style={{ padding: "0px" }}>
          <input type="text"></input>
          <button>Search</button>
        </div>
        <div>
          <button
            className="topRatedBtn"
            onClick={() => {
              let filterRes = restaurantList.filter((res) => {
                res.card.card.info.avgRating > 4;
              });
              console.log(filterRes);
              setRestaurantList(filterRes);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="bodyComponent">
        {restaurantList.map((res) => (
          // console.log(res)
          //  <p>hello</p>
          <ResCard data={res} key={res.card.card.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
