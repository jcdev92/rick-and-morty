import React from "react";
import CardResident from "./CardResident";

const CardContainer = ({ location }) => {
  return (
    <div className="card__container">
      {location?.residents
        ? location?.residents.map((url) => <CardResident key={url} url={url} />)
        : location?.results[0].residents.map((url) => (
            <CardResident key={url} url={url} />
          ))}
    </div>
  );
};

export default CardContainer;
