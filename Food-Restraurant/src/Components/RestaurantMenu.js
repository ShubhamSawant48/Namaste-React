import { RESMENUAPI } from "../utils/constants";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState({});

  const { resID } = useParams();
  // console.log(resID);

  const fetchMenu = async () => {
    const data = await fetch(
      RESMENUAPI + resID + "&catalog_qa=undefined&query=Pizza"
    );
    const json = await data.json();

    console.log(json?.data?.cards[2]?.card?.card?.info);

    setResInfo(json?.data?.cards[2]?.card?.card?.info);

    // console.log(resInfo);

    // console.log(resInfo);

    // setTitle(json?.data?.cards[2]?.card?.card?.info?.name);
    // setMenu(
    //   json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card?.itemCards?.splice(
    //     0,
    //     20
    //   )
    // );
    // console.log(temp2);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  // const { name } = resInfo?.data;

  return (
    <div className="text-center">
      <div className="font-bold text-4xl my-3">
        <h1>{resInfo.name}</h1>
      </div>
      <div>
        <h2 className="mt-5 text-2xl">Special Menu:</h2>
        
      </div>
    </div>
  );
};
export default RestaurantMenu;
