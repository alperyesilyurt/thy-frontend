import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
  Input,
  InputGroup,
  InputLeftElement,
  useToast,
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

function FlightQuery() {
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState(null);
  const navigate = useNavigate();

  const [formElements, setFormElements] = useState({
    departure: null,
    arrival: null,
    date: "23.01.2023",
    classType: null,
    passenger: null,
  });

  useEffect(() => {
    setFormElements({ ...formElements, classType: value, passenger: counter });
  }, [value, counter]);

  const toast = useToast();

  const buttonFunc = () => {
    const matchedFlights = data.flights.filter((item) => {
      return (
        item.originAirport.city.name === formElements.departure &&
        item.destinationAirport.city.name === formElements.arrival
      );
    });

    if (matchedFlights?.length !== 0) {
      navigate("/flight-list", {state: {matchedFlights:matchedFlights,formElements:formElements}  });
    } else {
      toast({
        title: "Opps, Hata",
        description: "Aradığınız uçuş bulunamadı.",
        status: "error",
        duration: 2500,
        isClosable: true,
      });
    }
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
        <InputGroup width="200px">
          <InputLeftElement children={<FaPlaneDeparture />} />
          <Input
            onChange={(e) =>
              setFormElements({ ...formElements, departure: e.target.value })
            }
            variant="filled"
            height="48px"
            size="lg"
            borderRadius="0px"
            icon={<FaPlaneDeparture />}
            placeholder="Nereden"
          />
        </InputGroup>
        <InputGroup width="200px">
          <InputLeftElement children={<FaPlaneArrival />} />
          <Input
            onChange={(e) =>
              setFormElements({ ...formElements, arrival: e.target.value })
            }
            variant="filled"
            height="48px"
            size="lg"
            borderRadius="0px"
            icon={<FaPlaneDeparture />}
            placeholder="Nereye"
          />
        </InputGroup>

        <Button
          size="lg"
          height="48px"
          width="100px"
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
              width="100px"
              background="#233142"
              color="white"
              borderRadius="0px"
              variant="solid"
              leftIcon={<BsPersonFill />}
            >
              {counter}
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
                <RadioGroup onChange={setValue} value={value}>
                  <Radio value="Economy Class">Economy Class</Radio>
                  <Radio value="Business Class">Business Class</Radio>
                </RadioGroup>
              </Stack>
              <Stack direction="row">
                <Text fontSize="lg" color="black">
                  Yolcu
                </Text>
                <IconButton
                  onClick={() => setCounter(counter - 1)}
                  isDisabled={counter <= 0}
                  size="xs"
                  height="28px"
                  colorScheme="gray"
                  icon={<MinusIcon size={20} />}
                />
                <Text fontSize="lg" color="black">
                  {counter}
                </Text>
                <IconButton
                  onClick={() => setCounter(counter + 1)}
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
          onClick={() => buttonFunc()}
          size="xs"
          height="48px"
          width="100px"
          colorScheme="red"
          borderRadius="0px"
          icon={<BsChevronRight size={20} />}
        />
      </SelectBox>
    </FlightQueryWrapper>
  );
}
export default FlightQuery;
