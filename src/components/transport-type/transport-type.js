import React from "react";
import overground from "./overground-icon.svg";
import underground from "./underground-icon.svg";

const TransportType = props => {
  return props.type === "overground" ? (
    <img src={overground} alt="" className="transport-type" />
  ) : (
    <img src={underground} alt="" className="transport-type" />
  );
};

export default TransportType;
