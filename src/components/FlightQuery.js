import React from "react";
import styled from "styled-components";
import classes from "./style.module.css";
import data from "../data/flights.json";
import {
  BsChevronRight,
  BsPersonFill,
  BsFillCalendarWeekFill,
} from "react-icons/bs";
import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa";
export const FlightQueryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  background-color: #063048;
  padding-top: 100px;
  height: 100vh;
`;

export const SelectBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  background-color: rgb(96 105 119 / 60%);
  padding: 20px;
`;

console.log(data.flights);

function FlightQuery() {
  const buttonFunc = () => {
    console.log("lolll");
  };
  return (
    <FlightQueryWrapper>
      <h1 className={classes.textColor}>Merhaba</h1>
      <h2 className={classes.textColor}>Nereyi keşfetmek istersiniz?</h2>
      <SelectBox>
        <FaPlaneDeparture className={classes.inputFlyIcon} size={30} />
        <input className={classes.inputFly} placeholder="Nereden" />
        <FaPlaneArrival className={classes.inputFlyIcon} size={30} />
        <input className={classes.inputFly} placeholder="Nereye"/>

        <button className={classes.dateButton}>
          Tarih
          <BsFillCalendarWeekFill size={30} />
        </button>
        <button className={classes.personButton}>
          <BsPersonFill size={30} />
          <h className={classes.personNumber}>5</h>
        </button>
        <button onClick={() => buttonFunc()} className={classes.iconButton}>
          <BsChevronRight size={30} />
        </button>
      </SelectBox>
    </FlightQueryWrapper>
  );
}
export default FlightQuery;
