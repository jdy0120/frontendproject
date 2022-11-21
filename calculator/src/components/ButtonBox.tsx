import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(150px, auto);
  grid-gap: 10px;
`;

const Button = styled.button``;

const ButtonNum = styled(Button)``;

const ButtonCalc = styled(Button)``;

const ButtonBox = () => {
  const [addNum, setAddNum] = useState(0);

  return (
    <Container>
      <ButtonNum onClick={() => setAddNum(addNum * 10 + 1)} />
      <ButtonNum onClick={() => setAddNum(addNum * 10 + 1)} />
      <ButtonNum onClick={() => setAddNum(addNum * 10 + 1)} />
      <ButtonCalc name={"+"} />
      <ButtonNum onClick={() => setAddNum(addNum * 10 + 1)} />
      <ButtonNum onClick={() => setAddNum(addNum * 10 + 1)} />
      <ButtonNum onClick={() => setAddNum(addNum * 10 + 1)} />
      <Button name={"-"} />
      <ButtonNum onClick={() => setAddNum(addNum * 10 + 1)} />
      <ButtonNum onClick={() => setAddNum(addNum * 10 + 1)} />
      <ButtonNum onClick={() => setAddNum(addNum * 10 + 1)} />
      <ButtonCalc name={"*"} />
      <ButtonCalc name={"."} />
      <ButtonNum onClick={() => setAddNum(addNum * 10 + 1)} />
      <ButtonCalc name={"="} />
    </Container>
  );
};

export default ButtonBox;
