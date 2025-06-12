import ResCard from "./ResCard.js";
import { useEffect } from "react";
import { SWIIGGYAPI } from "../utils/constants.js";

const Body = () => {
  useEffect( () => {
    fetchData();
  } , [] )

  const fetchData = async () => {
    const data = await fetch(SWIIGGYAPI);

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
