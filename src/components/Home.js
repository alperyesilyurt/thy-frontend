import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import { Text, Button, Box, Image } from "@chakra-ui/react";
export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background-color: #063048;
  padding-top: 100px;
  height: 100vh;
`;
function Home() {
  return (
    <>
      <HomeWrapper>
        <Image
          borderRadius="full"
          boxSize="150px"
          src="https://s3-symbol-logo.tradingview.com/turk-hava-yollari--600.png"
        />

        <Box
          display="flex"
          justifyContent="center"
          bg="green"
          w="10%"
          p={4}
          color="white"
          borderRadius="20px"
        >
          <Link to="/flight-query">
          <Text as="b">BAŞLA</Text></Link>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          bg="red"
          w="30%"
          p={4}
          color="white"
          borderRadius="20px"
        >
          <Text as= "b">Alper Yeşilyurt THY Frontend Challenge</Text>
        </Box>
      </HomeWrapper>
    </>
  );
}
export default Home;
