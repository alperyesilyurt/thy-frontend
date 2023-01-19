import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function FlightList() {
  const state = useLocation();
  const data = state.state.matchedFlights;

  console.log("mathecd adsdlşajs ::", data[0]);
  return (
  <>
  <p>{data[0]?.originAirport?.city?.name}</p>
  
  </>
  );
}
export default FlightList;
