import ResCard from "./ResCard.js";
import { useState, useEffect } from "react";
import { SWIIGGYAPI } from "../utils/constants.js";
import Shimmer from "./Shimmer.js";

const Body = () => {
  let [restaurantList, setRestaurantList] = useState([]);
  let [filterdRestaurant, setFilterdRestaurant] = useState([]);
  let [searchText, setSearchText] = useState("");

  // console.log(restaurantlist);
  // console.log("Body");

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
    setFilterdRestaurant(temp || []);
  };

  // console.log("DATA: ", restaurantList);

  // if (restaurantList.length === 0) {
  //   return <Shimmer />;
  // }

  // console.log(Shimmer);

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="searAndBtn">
        <div className="search" style={{ padding: "0px" }}>
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            onClick={() => {
              // console.log(searchText);

              let searchedRes = restaurantList.filter((res) =>
                res.card.card.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilterdRestaurant(searchedRes);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="topRatedBtn"
            onClick={() => {
              let filterRes = restaurantList.filter(
                (res) => res.card.card.info.avgRating > 4.3
              );
              // console.log(filterRes);
              setFilterdRestaurant(filterRes);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="bodyComponent">
        {filterdRestaurant.map((res) => (
          // console.log(res)
          //  <p>hello</p>
          <ResCard data={res} key={res.card.card.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
