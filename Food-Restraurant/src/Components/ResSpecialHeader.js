import { useState } from "react";
import ResSpecialBody from "./ResSpecialBody";

const ResSpecialHeader = ({ data }) => {
  // console.log(data);
  const [showItems, setShowItems] = useState(true);
  return (
    <div>
      <div className="w-6/12 h-auto mx-auto bg-gray-100 m-10">
        <div className="bg-gray-100 flex justify-between font-bold p-2 cursor-pointer">
          <span>
            {data.card.card.title} (
            {data?.card?.card?.itemCards?.length ||
              data?.card.card?.categories[0]?.itemCards?.length}
            )
          </span>
          <span>🔻</span>
        </div>
        {/* {console.log(data)} */}
        <ResSpecialBody
          data={
            data.card.card.itemCards || data.card.card.categories[0].itemCards
          }
        />
      </div>
    </div>
  );
};

export default ResSpecialHeader;
