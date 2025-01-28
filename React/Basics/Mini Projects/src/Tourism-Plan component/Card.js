import { useState } from "react";
import './tour' ;

const Card = ({ id, name, info, image, price, removeTour }) => {
  const [readmore, setReadmore] = useState(false);
  let description = readmore ? `${info}...` : `${info.substring(0, 200)}....`;

  function wholeDescriptionHandler() {
    setReadmore(!readmore);
  }

  return (
    <div className="card">
      <img src={image} className="image" alt="imag"></img>
      <div className="tour-details">
        <h2 className="tour-price">₹ {price}</h2>
        <h2 className="tour-location">{name}</h2>
      </div>
      <div>
        {description}
        <span className="read-more" onClick={wholeDescriptionHandler}>
          {readmore ? `Show Less` : `Read More`}
        </span>
      </div>
      <button className="remove-tour" onClick={() => removeTour(id)}>
        Not Interested
      </button>
    </div>
  );
};

export default Card;
