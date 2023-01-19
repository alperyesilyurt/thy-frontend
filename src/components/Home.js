import { Link } from "react-router-dom";


import React from 'react'
function Home() {
  return (
    <>
    <div>
        <Link to="/flight-list">FlightList</Link>
      </div>
      <div>
        <Link to="/flight-query">FlightQuery</Link>
      </div>
      <div>
        <Link to="/cabin-selection">CabinSelection</Link>
      </div>
    </>
  )
}
export default Home