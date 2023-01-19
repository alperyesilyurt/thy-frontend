import { Routes, Route, Link } from "react-router-dom";
import Template404 from "./components/Template404";
import FlightList from "./components/FlightList";
import FlightQuery from "./components/FlightQuery";
import CabinSelection from "./components/CabinSelection";
import Home from "./components/Home";
function App() {
  return (
    <div>
      {/* 
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/flight-list">FlightList</Link>
      </div>
      <div>
        <Link to="/flight-query">FlightQuery</Link>
      </div>
      <div>
        <Link to="/cabin-selection">CabinSelection</Link>
      </div> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flight-list" element={<FlightList />} />
        <Route path="/flight-query" element={<FlightQuery />} />
        <Route path="/cabin-selection" element={<CabinSelection />} />
        <Route path="*" element={<Template404 />} />
      </Routes>
    </div>
  );
}
export default App;