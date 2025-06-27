import ResSpecialBody from "./ResSpecialBody";
const ResSpecial = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div className="w-6/12 h-auto mx-auto bg-gray-100 m-10">
        <div className="bg-gray-100 flex justify-between font-bold p-2 cursor-pointer">
          <span>
            {data.card.card.title} ({data.card.card.itemCards.length})
          </span>
          <span>🔻</span>
        </div>
        {data.card.card.itemCards.map((it) => (
          <ResSpecialBody key={it.card.info.id} data={it} />
        ))}
      </div>
    </div>
  );
};

export default ResSpecial;
