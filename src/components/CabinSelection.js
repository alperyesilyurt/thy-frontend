import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Text, Button, Divider, IconButton } from "@chakra-ui/react";
import { CloseIcon, CheckIcon } from "@chakra-ui/icons";

export const CabinSelectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  background-color: white;
  padding-top: 100px;
`;
export const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  width: 700px;
`;
export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

function CabinSelection() {
  const state = useLocation();
  const data = state.state.status;
  const totalPrice = state.state.totalPrice;
  const navigate = useNavigate();

  return (
    <CabinSelectionWrapper>
      <ColumnWrapper>
        {data === "AVAILABLE" ? (
          <RowWrapper>
            <IconButton
              colorScheme="green"
              borderRadius="50%"
              aria-label="Call Segun"
              size="lg"
              icon={<CheckIcon />}
            />
            <Text fontSize="xl" color="black">
              Kabin Seçiminiz tamamlandı.
            </Text>
          </RowWrapper>
        ) : (
          <RowWrapper>
            <IconButton
              colorScheme="red"
              borderRadius="50%"
              aria-label="Call Segun"
              size="lg"
              icon={<CloseIcon />}
            />
            <Text fontSize="xl" color="black">
              Kabin Seçiminiz tamamlanamadı.
            </Text>
          </RowWrapper>
        )}

        <Divider />
      </ColumnWrapper>

      {data === "AVAILABLE" ? (
        <RowWrapper
          style={{ marginTop: "20px", justifyContent: "space-between" }}
        >
          <Text fontSize="xl" color="black">
            Toplam tutar
          </Text>
          <Text fontSize="xl" as="b" color="#63B3ED">
            {totalPrice}
          </Text>
        </RowWrapper>
      ) : (
        <RowWrapper style={{ marginTop: "20px", justifyContent: "end" }}>
          <Button
            onClick={() => {
              navigate("/flight-query");
            }}
            color="white"
            background="#E81932"
            variant="outline"
            size="xs"
            height="12px"
            padding="20px"
          >
            Başa Dön
          </Button>
        </RowWrapper>
      )}
    </CabinSelectionWrapper>
  );
}
export default CabinSelection;
