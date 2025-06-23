import ResCard from "./ResCard.js";
import { useState, useEffect } from "react";
import { SWIIGGYAPI } from "../utils/constants.js";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";

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
      <div className="flex flex-wrap gap-5 mx-60 mb-5 mt-2">
        <div className="search" style={{ padding: "0px" }}>
          <input
          className="border-1 border-black bg-gray-200 p-1.5"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            className="ml-5 border-1 border-black rounded-md p-1 cursor-pointer hover:bg-amber-100"
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
            className="border-1 border-black rounded-md p-1 cursor-pointer hover:bg-amber-100"
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
      <div className="flex flex-wrap mx-35 gap-5">
        {filterdRestaurant.map((res) => (
          // console.log(res)
          //  <p>hello</p>
          <Link
            to={"/restaurant/" + res.card.card.info.id}
            key={res.card.card.info.id}
          >
            <ResCard data={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
