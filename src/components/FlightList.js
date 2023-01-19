import {
  Card,
  CardBody,
  CardHeader,
  Switch,
  Text,
  Button,
  Divider,
  Radio,
  RadioGroup,
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
  padding: 10px;
  margin-top: 20px;
  width: 380px;
`;
export const DataBoxRadio = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05);
  padding: 10px;
  margin-top: 20px;
  width: 190px;
`;
export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
`;

function FlightList() {
  const state = useLocation();
  const data = state.state.matchedFlights;
  const formData = state.state.formElements;

  console.log("state ::", data);
  return (
    <>
      <FlightListWrapper>
        <ColumnWrapper style={{ marginLeft: "-560px", marginTop: "-60px" }}>
          <Button
            color="white"
            width="50%"
            background="#E81932"
            variant="outline"
            borderRadius="0px"
            size="xs"
            height="12px"
            padding="12px"
          >
            UÇUŞ
          </Button>
          <RowWrapper>
            <Text fontSize="xl" color="black">
              {formData.departure} -
            </Text>
            <Text fontSize="xl" color="black">
              {formData.arrival},
            </Text>
            <Text fontSize="xl" color="black">
              {formData.passenger} Yolcu
            </Text>
          </RowWrapper>
          <RowWrapper>
            <Text fontSize="sm" as="b" color="black">
              Promosyon Kodu
            </Text>
            <Switch size="md" />
          </RowWrapper>
        </ColumnWrapper>

        <Card
          style={{
            width: "800px",
            backgroundColor: "#f9f9f9",
            marginTop: "20px",
          }}
        >
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
                  <>
                    <div style={{ display: "flex", gap: "10px" }}>
                      <DataBox>
                        <ColumnWrapper>
                          <Text fontSize="xs" as="b" color="black">
                            {item.arrivalDateTimeDisplay}
                          </Text>
                          <Text fontSize="xs" color="black">
                            {item.originAirport.city.code}
                          </Text>
                          <Text fontSize="xs" color="black">
                            {item.originAirport.city.name}
                          </Text>
                        </ColumnWrapper>
                        <Divider width="150px" borderWidth="1px" />
                        <ColumnWrapper>
                          <Text fontSize="xs" as="b" color="black">
                            {item.departureDateTimeDisplay}
                          </Text>
                          <Text fontSize="xs" color="black">
                            {item.destinationAirport.city.code}
                          </Text>
                          <Text fontSize="xs" color="black">
                            {item.destinationAirport.city.name}
                          </Text>
                        </ColumnWrapper>
                        <ColumnWrapper style={{ marginLeft: "30px" }}>
                          <Text fontSize="xs" color="black">
                            Uçuş Süresi
                          </Text>
                          <Text fontSize="xs" as="b" color="black">
                            {item.flightDuration}
                          </Text>
                        </ColumnWrapper>
                      </DataBox>
                      <RadioGroup
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          gap: "10px",
                        }}
                      >
                        <DataBoxRadio>
                          <Radio value="1">
                            <Text fontSize="xs" as="u" color="black">
                              ECONOMY
                            </Text>
                          </Radio>
                          <ColumnWrapper>
                            <Text fontSize="xs" color="black">
                              Yolcu başına
                            </Text>
                            <Text fontSize="xs" color="black">
                              TRY 0
                            </Text>
                          </ColumnWrapper>
                        </DataBoxRadio>
                        <DataBoxRadio>
                          <Radio value="2">
                            <Text fontSize="xs" as="u" color="black">
                              BUSINESS
                            </Text>
                          </Radio>
                          <ColumnWrapper>
                            <Text fontSize="xs" color="black">
                              Yolcu başına
                            </Text>
                            <Text fontSize="xs" color="black">
                              TRY 0
                            </Text>
                          </ColumnWrapper>
                        </DataBoxRadio>
                      </RadioGroup>
                    </div>
                  </>
                );
              })}
          </CardBody>
        </Card>
      </FlightListWrapper>
    </>
  );
}
export default FlightList;
