import React from "react";
import { DepositType } from "../../../types/type";
import styled from "styled-components";
import SortingBar from "./SortingBar";
import Deposit from "./Deposit";
import AllDepositBtn from "./AllDepositBtn";

const Title = styled.h1`
  font-weight: 500;
  color: ${({ theme }) => theme.textColor};
  font-size: 1.3rem;
  display: flex;
  align-items: center;
`;

const DepositCount = styled.div`
  margin-left: 1rem;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.header};
  color: ${({ theme }) => theme.headerNumber};
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;

interface Props {
  title: string;
  data: DepositType[];
  count: number;
}
const Deposits = ({ title, data, count }: Props) => {
  return (
    <div>
      <Title>
        {title}
        <DepositCount>{count}</DepositCount>
      </Title>
      <SortingBar />
      {data.map((deposit) => (
        <Deposit data={deposit} key={deposit.property.address.street} />
      ))}
      <AllDepositBtn title={title}></AllDepositBtn>
    </div>
  );
};

export default Deposits;
