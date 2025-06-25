import ResCard from "./ResCard.js";
import { useState, useEffect } from "react";
import { SWIIGGYAPI } from "../utils/constants.js";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import resDetails from "../utils/resDetails.js";

const Body = () => {
  let [restaurantList, setRestaurantList] = useState([]);
  let [filterdRestaurant, setFilterdRestaurant] = useState([]);
  let [searchText, setSearchText] = useState("");

  // console.log(restaurantlist);
  // console.log("Body");
  const deep =
    resDetails?.[0]?.data?.cards?.[0]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants;
      
  useEffect(() => {
    setRestaurantList(deep || []);
    setFilterdRestaurant(deep || []);
  }, []);

  // console.log("DATA: ", restaurantList);

  // if (restaurantList.length === 0) {
  //   return <Shimmer />;
  // }

  // console.log(Shimmer);

  // const deep =
  //   filterdRestaurant?.data?.cards?.[0]?.card?.card?.gridElements?.infoWithStyle
  //     ?.restaurants;
  // console.log(resDetails);
  // console.log(restaurants);
  // console.log(restaurantList)
  // console.log(filterdRestaurant)
  // console.log(deep)

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
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
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
                (res) => res.info.avgRating > 4.3
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
          <Link to={"/restaurant/" + res.info.id} key={res.info.id}>
            <ResCard data={res.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
