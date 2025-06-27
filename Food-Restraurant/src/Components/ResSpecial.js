import { useEffect } from "react";

const ResSpecial = ({ data }) => {
  const accData = data?.[4]?.groupedCard.cardGroupMap.REGULAR.cards.splice(1);

  //   useEffect(() => {
  //     console.log(accData);
  //   }, []);
  return <div>hi</div>;
};

export default ResSpecial;
