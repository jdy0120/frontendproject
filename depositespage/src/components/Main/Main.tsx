import React from "react";
import Nav from "./Nav";
import styled from "styled-components";
import NavDepositBtn from "./NavDepositBtn";
import Deposits from "./Deposit/Deposits";

import depositData from "../../DepositData.json";

const Container = styled.div`
  width: auto;
  margin-left: 16rem;
  position: relative;
  padding: 0 4rem;
`;

const Main = () => {
  return (
    <Container>
      <Nav />
      <NavDepositBtn />
      <Deposits title="Active Deposits" count={2} data={depositData.active} />
      <Deposits title="Closed Deposits" count={8} data={depositData.closed} />
    </Container>
  );
};

export default Main;
