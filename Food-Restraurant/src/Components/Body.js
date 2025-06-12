import ResCard from "./ResCard.js";
import { useEffect } from "react";

const Body = () => {
  useEffect( () => {
    fetchData();
  } , [] )

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/update");

    const json = data.json();

    console.log(json);
  }  
  return (
    <div>
      <div className="search" style={{ padding: "10px" }}>
        Search
      </div>
      <div className="bodyComponent">
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
      </div>
    </div>
  );
};

export default Body;
