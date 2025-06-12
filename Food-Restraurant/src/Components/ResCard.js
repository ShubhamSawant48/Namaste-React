import { RESCARDLOGO_URL } from "../utils/constants";



const ResCard = (props) => {
  const { resData } = props;
  return (
    <div>
      <div className="resCard">
        <img src={RESCARDLOGO_URL} className="photos"></img>
        <h2 style={{ padding: "0px" }}></h2>
        <h3>Rating:4.5</h3>
        <h4>Biryani,North India,Chinese</h4>
      </div>
    </div>
  );
};

export default ResCard;
