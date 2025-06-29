import ResSpecialBody from "./ResSpecialBody";

const ResSpecialHeader = ({ data, setShowIndex, showItems }) => {
  // console.log(data);
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      <div className="w-6/12 h-auto mx-auto bg-gray-100 m-5 rounded-2xl">
        <div
          className="bg-gray-100 flex justify-between font-bold p-2 cursor-pointer"
          onClick={handleClick}
        >
          <span>
            {data.card.card.title} (
            {data?.card?.card?.itemCards?.length ||
              data?.card.card?.categories[0]?.itemCards?.length}
            )
          </span>
          <span>🔻</span>
        </div>
        {showItems && (
          <ResSpecialBody
            data={
              data.card.card.itemCards || data.card.card.categories[0].itemCards
            }
          />
        )}
      </div>
    </div>
  );
};

export default ResSpecialHeader;
