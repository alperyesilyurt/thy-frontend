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
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  CardFooter,
} from "@chakra-ui/react";
import React, { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { sortBy } from "lodash-es";

export const FlightListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  background-color: white;
  padding-top: 100px;
`;
export const DataBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05);
  padding: 10px;
  width: 380px;
  height: 100px;
`;
export const DataBoxRadio = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05);
  padding: 10px;
  width: 190px;
  height: 100px;
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
  const [promotionText, setPromotionText] = useState(false);
  const state = useLocation();
  const data = state.state.matchedFlights;
  const formData = state.state.formElements;
  const navigate = useNavigate();
  const orderedData = sortBy(
    data,
    (p) => p.fareCategories["ECONOMY"].subcategories[0].price.amount
  );

  const [orderData, setOrderData] = useState(orderedData);

  const orderPrice = () => {
    setOrderData(
      sortBy(
        data,
        (p) =>
          p.fareCategories["BUSINESS" || "ECONOMY"].subcategories[0].price
            .amount
      )
    );
  };
  const orderTime = () => {
    setOrderData(
      sortBy(
        data,
        [(o) => new Date(o.originAirport.arrivalDateTimeDisplay)],
        ["desc"]
      )
    );
  };

  return (
    <>
      <FlightListWrapper>
        <ColumnWrapper style={{ marginLeft: "-560px", marginTop: "-80px" }}>
          <Button
            onClick={() => {
              navigate("/flight-query");
            }}
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
            <Switch
              onChange={(e) => setPromotionText(e.target.checked)}
              colorScheme="red"
              size="md"
            />
          </RowWrapper>
        </ColumnWrapper>
        {promotionText && (
          <ColumnWrapper style={{ marginLeft: "-220px", marginTop: "10px" }}>
            <Text fontSize="xs" color="black">
              Promosyon Kodu seçeneği ile tüm Economy kabini Eco Fly paketlerini
              %50 indirimle satın alabilirsiniz!
            </Text>
            <Text fontSize="xs" color="black">
              Promosyon Kodu seçeneği aktifken Eco Fly paketi haricinde seçim
              yapılamamaktadır.
            </Text>
          </ColumnWrapper>
        )}

        <Card
          style={{
            width: "800px",
            backgroundColor: "#f9f9f9",
            marginTop: "20px",
          }}
        >
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
              onClick={() => orderPrice()}
              color="white"
              variant="outline"
              size="xs"
              height="12px"
              padding="12px"
            >
              Ekonomi Ücreti
            </Button>
            <Button
              onClick={() => orderTime()}
              color="white"
              variant="outline"
              size="xs"
              height="12px"
              padding="12px"
            >
              Kalkış Saati
            </Button>
          </CardHeader>
          <CardBody>
            {orderData &&
              orderData.map((item) => {
                return (
                  <>
                    <Tabs variant="unstyled" align="center">
                      <TabList
                        style={{
                          display: "flex",
                          height: "90px",
                          gap: "20px",
                          marginBottom: "-10px",
                        }}
                      >
                        <Tab
                          style={{ marginLeft: "-20px", marginRight: "-20px" }}
                        >
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
                        </Tab>
                        <Tab
                          style={{ marginLeft: "-20px", marginRight: "-20px" }}
                        >
                          <DataBoxRadio>
                            <Text fontSize="xs" as="u" color="black">
                              ECONOMY
                            </Text>

                            <ColumnWrapper>
                              <Text fontSize="xs" color="black">
                                Yolcu başına
                              </Text>
                              <Text fontSize="xs" as="b" color="black">
                                {
                                  item.fareCategories.ECONOMY.subcategories[0]
                                    .price.currency
                                }{" "}
                                {
                                  item.fareCategories.ECONOMY.subcategories[0]
                                    .price.amount
                                }
                              </Text>
                            </ColumnWrapper>
                          </DataBoxRadio>
                        </Tab>
                        <Tab
                          style={{ marginLeft: "-20px", marginRight: "-20px" }}
                        >
                          {" "}
                          <DataBoxRadio>
                            <Text fontSize="xs" as="u" color="black">
                              BUSINESS
                            </Text>

                            <ColumnWrapper>
                              <Text fontSize="xs" color="black">
                                Yolcu başına
                              </Text>
                              <Text fontSize="xs" as="b" color="black">
                                {
                                  item.fareCategories.BUSINESS.subcategories[0]
                                    .price.currency
                                }{" "}
                                {
                                  item.fareCategories.BUSINESS.subcategories[0]
                                    .price.amount
                                }
                              </Text>
                            </ColumnWrapper>
                          </DataBoxRadio>
                        </Tab>
                      </TabList>
                      {
                        <TabPanels>
                          <TabPanel></TabPanel>
                          <TabPanel>
                            <DataBox
                              style={{
                                width: "782px",
                                height: "360px",
                                marginLeft: "-27px",
                              }}
                            >
                              {item.fareCategories.ECONOMY.subcategories.map(
                                (cards) => {
                                  return (
                                    <RowWrapper
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                        marginLeft: "8px",
                                        marginRight: "8px",
                                      }}
                                    >
                                      <Card
                                        style={{
                                          width: "238px",
                                          height: "330px",
                                        }}
                                      >
                                        <CardHeader
                                          style={{
                                            background: "#f9f9f9",
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            flexDirection: "row",
                                            gap: "10px",
                                          }}
                                        >
                                          <Text
                                            fontSize="md"
                                            as="b"
                                            color="black"
                                          >
                                            {cards.brandCode}
                                          </Text>
                                          {promotionText &&
                                          cards.brandCode === "ecoFly" ? (
                                            <Text
                                              fontSize="md"
                                              as="b"
                                              color="green"
                                            >
                                              <Text
                                                fontSize="xs"
                                                as="s"
                                                color="red"
                                              >
                                                {cards.price.currency}{" "}
                                                {cards.price.amount}
                                              </Text>
                                              {cards.price.currency}{" "}
                                              {cards.price.amount / 2}
                                            </Text>
                                          ) : (
                                            <Text
                                              fontSize="md"
                                              as="b"
                                              color="black"
                                            >
                                              {cards.price.currency}{" "}
                                              {cards.price.amount}
                                            </Text>
                                          )}
                                        </CardHeader>
                                        <CardBody>
                                          {cards.rights.map((right) => {
                                            return (
                                              <ColumnWrapper>
                                                <Box
                                                  borderWidth="1px"
                                                  w="100%"
                                                  p={1}
                                                  color="black"
                                                >
                                                  {right}
                                                </Box>
                                              </ColumnWrapper>
                                            );
                                          })}
                                        </CardBody>
                                        <CardFooter>
                                          <Button
                                            isDisabled={
                                              promotionText &&
                                              cards.brandCode !== "ecoFly"
                                            }
                                            onClick={() => {
                                              if (
                                                cards.status === "AVAILABLE"
                                              ) {
                                                navigate("/cabin-selection", {
                                                  state: {
                                                    status: "AVAILABLE",
                                                    totalPrice: promotionText
                                                      ? cards?.price?.currency +
                                                        " " +
                                                        (cards?.price?.amount *
                                                          formData.passenger) /
                                                          2
                                                      : cards?.price?.currency +
                                                        " " +
                                                        cards?.price?.amount *
                                                          formData.passenger,
                                                  },
                                                });
                                              } else {
                                                navigate("/cabin-selection", {
                                                  state: { status: "ERROR" },
                                                });
                                              }
                                            }}
                                            colorScheme="red"
                                            borderRadius="0px"
                                            width="100%"
                                          >
                                            Uçuşu Seç
                                          </Button>
                                        </CardFooter>
                                      </Card>
                                    </RowWrapper>
                                  );
                                }
                              )}
                            </DataBox>
                          </TabPanel>
                          <TabPanel>
                            <DataBox
                              style={{
                                width: "782px",
                                height: "360px",
                                marginLeft: "-27px",
                              }}
                            >
                              {item.fareCategories.BUSINESS.subcategories.map(
                                (cards) => {
                                  return (
                                    <RowWrapper
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                        marginLeft: "8px",
                                        marginRight: "8px",
                                      }}
                                    >
                                      <Card
                                        style={{
                                          width: "238px",
                                          height: "330px",
                                        }}
                                      >
                                        <CardHeader
                                          style={{
                                            background: "#f9f9f9",
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            flexDirection: "row",
                                            gap: "10px",
                                          }}
                                        >
                                          <Text
                                            fontSize="md"
                                            as="b"
                                            color="black"
                                          >
                                            {cards.brandCode}
                                          </Text>
                                          {promotionText &&
                                          cards.brandCode === "ecoFly" ? (
                                            <Text
                                              fontSize="md"
                                              as="b"
                                              color="green"
                                            >
                                              <Text
                                                fontSize="xs"
                                                as="s"
                                                color="red"
                                              >
                                                {cards.price.currency}{" "}
                                                {cards.price.amount}
                                              </Text>
                                              {cards.price.currency}{" "}
                                              {cards.price.amount / 2}
                                            </Text>
                                          ) : (
                                            <Text
                                              fontSize="md"
                                              as="b"
                                              color="black"
                                            >
                                              {cards.price.currency}{" "}
                                              {cards.price.amount}
                                            </Text>
                                          )}
                                        </CardHeader>
                                        <CardBody>
                                          {cards.rights.map((right) => {
                                            return (
                                              <ColumnWrapper>
                                                <Box
                                                  borderWidth="1px"
                                                  w="100%"
                                                  p={1}
                                                  color="black"
                                                >
                                                  {right}
                                                </Box>
                                              </ColumnWrapper>
                                            );
                                          })}
                                        </CardBody>
                                        <CardFooter>
                                          <Button
                                            isDisabled={
                                              promotionText &&
                                              cards.brandCode !== "ecoFly"
                                            }
                                            onClick={() => {
                                              if (
                                                cards.status === "AVAILABLE"
                                              ) {
                                                navigate("/cabin-selection", {
                                                  state: {
                                                    status: "AVAILABLE",
                                                    totalPrice: promotionText
                                                      ? cards?.price?.currency +
                                                        " " +
                                                        (cards?.price?.amount *
                                                          formData.passenger) /
                                                          2
                                                      : cards?.price?.currency +
                                                        " " +
                                                        cards?.price?.amount *
                                                          formData.passenger,
                                                  },
                                                });
                                              } else {
                                                navigate("/cabin-selection", {
                                                  state: { status: "ERROR" },
                                                });
                                              }
                                            }}
                                            colorScheme="red"
                                            borderRadius="0px"
                                            width="100%"
                                          >
                                            Uçuşu Seç
                                          </Button>
                                        </CardFooter>
                                      </Card>
                                    </RowWrapper>
                                  );
                                }
                              )}
                            </DataBox>
                          </TabPanel>
                        </TabPanels>
                      }
                    </Tabs>
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
