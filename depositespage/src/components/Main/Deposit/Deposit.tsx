import React from "react";
import { DepositType } from "../../../types/type";
import styled from "styled-components";

const Containter = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(190, 190, 190, 0.22);
  cursor: pointer;
  background-color: ${({ theme }) => theme.primary};
  transition: all ease-in-out 300ms;

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
  }
`;

const Text = styled.h1`
  font-size: 0.8rem;
  font-weight: 500;
  color: ${({ theme }) => theme.textColor};
  margin: 0;
`;

const Subtitle = styled(Text)`
  font-size: 0.6rem;
  color: #b2bfe1;
  margin-top: 2px;
`;

const Property = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
`;

const PropertyText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;

const PropertyImg = styled.img`
  height: 35px;
  width: 35px;
`;

const PropertyStreet = styled(Text)`
  font-size: 1rem;
`;

const MoveInDate = styled(Text)`
  width: 15%;
`;

const Rent = styled(Text)`
  width: 10%;
`;

const DepositWrapper = styled(Text)`
  width: 15%;
`;

const Status = styled.div`
  display: flex;
  align-items: center;
`;

const StatusIndicator = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 10px;
  background-color: ${(props) => props.color};
  margin-left: 1rem;
  position: absolute;
  right: 7rem;
`;

interface Props {
  data: DepositType;
}

const Deposit = ({ data }: Props) => {
  const { property, moveInDate, rent, deposit, status } = data;

  return (
    <Containter>
      <Property>
        <PropertyImg src={require(`../../../assets/images/${property.imageUrl}`)} />
        <PropertyText>
          <PropertyStreet>{property.address.street}</PropertyStreet>
          <Subtitle>
            {property.address.city} {property.address.state}
          </Subtitle>
        </PropertyText>
      </Property>
      <MoveInDate>{moveInDate}</MoveInDate>
      <Rent>${rent}</Rent>
      <DepositWrapper>
        <Text>${deposit.amount}</Text>
        <Subtitle>{deposit.type}</Subtitle>
      </DepositWrapper>
      <Status>
        <Text>{status.message}</Text>
        {(() => {
          switch (status.level) {
            case 1:
              return <StatusIndicator color="#F17E7E" />;
            case 2:
              return <StatusIndicator color="#FFD056" />;
            case 3:
              return <StatusIndicator color="#75C282" />;
            default:
              return <StatusIndicator color="#AAA5A5" />;
          }
        })()}
      </Status>
    </Containter>
  );
};

export default Deposit;
