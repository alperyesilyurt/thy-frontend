import React from "react";
import styled from "styled-components";
import { Text, Button, Divider, IconButton } from "@chakra-ui/react";
import { CloseIcon, CheckIcon } from "@chakra-ui/icons";

export const Template404Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  background-color:  #063048;
  height: 100vh;
`;
export const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

`;


function Template404() {

  return (
    <Template404Wrapper>
<RowWrapper>
  <Text fontSize='50px' color='red'>!! ARADIĞINIZ SAYFA BULUNAMADI !!</Text>
</RowWrapper>
    </Template404Wrapper>
  );
}
export default Template404;
