import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
  Button,
  Divider,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

export const FlightListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  background-color: white;
  padding-top: 100px;
  height: 100vh;
`;
export const DataBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05);
  padding: 20px;
  margin-top: 20px;
  width: 380px;

`;
export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

function FlightList() {
  const state = useLocation();
  const data = state.state.matchedFlights;
  const formData = state.state.formElements;

  console.log("state ::", data);
  return (
    <>
      <FlightListWrapper>
        <Card style={{ width: "800px", backgroundColor: "#f9f9f9" }}>
          <CardBody>
            <CardHeader
              style={{
                background: "#063048",
                display: "flex",
                justifyContent: "right",
                alignItems: "center",
                flexDirection: "row",
                gap: "10px",
              }}
            >
              <Text fontSize="xs" color="white">
                Sıralama kriteri
              </Text>
              <Button
                color="white"
                variant="outline"
                size="xs"
                height="12px"
                padding="12px"
              >
                Ekonomi Ücreti
              </Button>
              <Button
                color="white"
                variant="outline"
                size="xs"
                height="12px"
                padding="12px"
              >
                Kalkış Saati
              </Button>
            </CardHeader>
            {data &&
              data.map((item) => {
                return (
                  <DataBox>
                    <ColumnWrapper>
                      <Text fontSize="xs" as='b' color="black">
                        {item.arrivalDateTimeDisplay}
                      </Text>
                      <Text fontSize="xs" color="black">
                        {item.originAirport.city.code}
                      </Text>
                      <Text fontSize="xs" color="black">
                        {item.originAirport.city.name}
                      </Text>
                    </ColumnWrapper>
                    <Divider width="150px"/>
                    <ColumnWrapper>
                      <Text fontSize="xs" as='b' color="black">
                        {item.departureDateTimeDisplay}
                      </Text>
                      <Text fontSize="xs" color="black">
                        {item.destinationAirport.city.code}
                      </Text>
                      <Text fontSize="xs" color="black">
                        {item.destinationAirport.city.name}
                      </Text>
                    </ColumnWrapper>
                    <ColumnWrapper style={{marginLeft:"30px"}}>
                      <Text fontSize="xs" color="black">
                        Uçuş Süresi
                      </Text>
                      <Text fontSize="xs" as='b' color="black">
                        {item.flightDuration}
                      </Text>
                    </ColumnWrapper>
                  </DataBox>
                );
              })}
          </CardBody>
        </Card>
      </FlightListWrapper>
    </>
  );
}
export default FlightList;
