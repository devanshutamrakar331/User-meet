import React, { useContext } from "react";
import { ApiContext } from "./context/apicontext";
const Card = () => {
  //   console.log(details.name.title);
  const details = useContext(ApiContext);
  console.log(details);
  const reload = () => {
    window.location.reload();
  };
  return (
    <div id="card">
      <div id="photo">
        <img src={`${details.photo}`} alt="" />
      </div>
      <div id="text">
        <h1>
          {details.name?.title +
            "." +
            " " +
            details.name?.first +
            " " +
            details.name?.last}
        </h1>
        <h3>
          <i className="ri-mail-fill"></i>
          {details?.email}
        </h3>
        <h3>
          <i className="ri-map-pin-fill"></i>
          {details.address?.country + details.address?.postcode}
        </h3>
        <h3>
          <i className="ri-phone-fill"></i>
          {details?.contact}
        </h3>
        <button onClick={reload}>Refresh</button>
      </div>
    </div>
  );
};

export default Card;
