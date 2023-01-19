import React, { useState } from "react";
import styled from "styled-components";
import data from "../data/flights.json";
import {
  BsChevronRight,
  BsPersonFill,
  BsFillCalendarWeekFill,
} from "react-icons/bs";
import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";

import {
  IconButton,
  Select,
  Button,
  Text,
  Popover,
  PopoverTrigger,
  PopoverBody,
  PopoverContent,
  PopoverArrow,
  RadioGroup,
  Stack,
  Radio,
} from "@chakra-ui/react";

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
  margin-top: 20px;
`;

console.log(data.flights);

function FlightQuery() {
  const [counter, setCounter] = useState(0);
  const buttonFunc = () => {
    console.log("lolll");
  };

  return (
    <FlightQueryWrapper>
      <Text fontSize="4xl" color="white">
        Merhaba
      </Text>
      <Text fontSize="3xl" color="white">
        Nereyi keşfetmek istersiniz?
      </Text>
      <SelectBox>
        <Select
          variant="filled"
          height="48px"
          size="lg"
          borderRadius="0px"
          icon={<FaPlaneDeparture />}
          placeholder="Nereden"
        >
          {data.flights.map((item) => (
            <option value={item.originAirport.code}>
              {item.originAirport.city.name}
            </option>
          ))}
        </Select>
        <Select
          variant="filled"
          height="48px"
          size="lg"
          borderRadius="0px"
          icon={<FaPlaneArrival />}
          placeholder="Nereye"
        >
          {data.flights.map((item) => (
            <option value={item.destinationAirport.code}>
              {item.destinationAirport.city.name}
            </option>
          ))}
        </Select>

        <Button
          size="lg"
          height="48px"
          width="200px"
          background="#233142"
          color="white"
          borderRadius="0px"
          variant="solid"
          rightIcon={<BsFillCalendarWeekFill />}
        >
          Tarih
        </Button>
        <Popover>
          <PopoverTrigger>
            <Button
              size="lg"
              height="48px"
              width="200px"
              background="#233142"
              color="white"
              borderRadius="0px"
              variant="solid"
              leftIcon={<BsPersonFill />}
            >
              1
            </Button>
          </PopoverTrigger>
          <PopoverContent borderRadius="0px">
            <PopoverArrow />
            <PopoverBody
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <Text fontSize="xl" color="black">
                Kabin ve yolcu seçimi
              </Text>

              <Stack direction="row">
                <RadioGroup >
                  <Radio value="1">Economy Class</Radio>
                  <Radio value="2">Business Class</Radio>
                </RadioGroup>
              </Stack>
              <Stack direction="row">
                <Text fontSize="lg" color="black">
                  Yolcu
                </Text>
                <IconButton
                onClick={()=> setCounter(counter-1)}
                isDisabled={counter<=0}
                  size="xs"
                  height="28px"
                  colorScheme="gray"
                  icon={<MinusIcon size={20} />}
                />
                <Text fontSize="lg" color="black">
                  {counter}
                </Text>
                <IconButton
                 onClick={()=>setCounter(counter+1)}
                  size="xs"
                  height="28px"
                  colorScheme="gray"
                  icon={<AddIcon size={20} />}
                />
              </Stack>
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <IconButton
        onClick={()=>buttonFunc()}
          size="xs"
          height="48px"
          width="200px"
          colorScheme="red"
          borderRadius="0px"
          icon={<BsChevronRight size={20} />}
        />
      </SelectBox>
    </FlightQueryWrapper>
  );
}
export default FlightQuery;
