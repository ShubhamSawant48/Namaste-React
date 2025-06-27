import ResCard from "./ResCard.js";
import { useState, useEffect } from "react";
import { SWIIGGYAPI } from "../utils/constants.js";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filterdRestaurant, setFilterdRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");


  const fetchData = async () => {
    const data = await fetch(SWIIGGYAPI);
    const json = await data.json();
    const temp = json.data.cards.splice(3, 10);

    setRestaurantList(temp || []);
    setFilterdRestaurant(temp || []);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // if (restaurantList.length === 0) {
  //   return <Shimmer />;
  // }

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
              console.log(searchText);
              const searchedRes = restaurantList.filter((res) =>
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
            className="border-1 border-black rounded-md p-1 mt-0.5 cursor-pointer hover:bg-amber-100"
            onClick={() => {
              const filterRes = restaurantList.filter(
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
            <ResCard data={res.card.card.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
