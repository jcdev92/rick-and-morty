import React from "react";
import useFetch from "../hooks/useFetch";

const CardResident = ({ url }) => {
  const { data } = useFetch(url);

  return (
    <div className="card__resident">
      <header>
        <img src={data?.image} alt={`image of ${data?.name}`} />
        <div>
          <div className="circle"></div>
          <h3>{data?.name}</h3>
        </div>
      </header>
      <div className="resident">
        <ul>
          <li>
            <span>Species:</span> {data?.species}
          </li>
          <li>
            <span>Origin:</span> {data?.origin?.name}
          </li>
          <li>
            <span>Episodes where appear:</span> {data?.episode?.length}
          </li>
          <li>
            <span>Status:</span> {data?.status}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CardResident;
