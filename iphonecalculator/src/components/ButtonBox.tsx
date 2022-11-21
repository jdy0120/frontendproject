import styled from "styled-components";
import Button from "./Button";

const Container = styled.div`
  width: 100%;
  height: 60%;
`;

const Box = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 10px;
  margin: 10px;
`;

const allButton = [
  { img: "AC", color: "#a9a9a9", size: 1 },
  { img: "plusminus", color: "#a9a9a9", size: 1 },
  { img: "percent", color: "#a9a9a9", size: 1 },
  { img: "div", color: "#ff9900", size: 1 },
  { img: "7", color: "#343434", size: 1 },
  { img: "8", color: "#343434", size: 1 },
  { img: "9", color: "#343434", size: 1 },
  { img: "mul", color: "#ff9900", size: 1 },
  { img: "4", color: "#343434", size: 1 },
  { img: "5", color: "#343434", size: 1 },
  { img: "6", color: "#343434", size: 1 },
  { img: "minus", color: "#ff9900", size: 1 },
  { img: "1", color: "#343434", size: 1 },
  { img: "2", color: "#343434", size: 1 },
  { img: "3", color: "#343434", size: 1 },
  { img: "plus", color: "#ff9900", size: 1 },
  { img: "0", color: "#343434", size: 2 },
  { img: "dot", color: "#343434", size: 1 },
  { img: "equal", color: "#ff9900", size: 1 },
];

interface Props {
  operation: string;
  setOperation: React.Dispatch<React.SetStateAction<string>>;
  calcSum: string;
  setCalcSum: React.Dispatch<React.SetStateAction<string>>;
  prevSum: number;
  setPrevSum: React.Dispatch<React.SetStateAction<number>>;
}

const ButtonBox = ({ operation, setOperation, calcSum, setCalcSum, prevSum, setPrevSum }: Props) => {
  return (
    <Container>
      <Box>
        {allButton.map((data) => {
          return (
            <Button
              key={data.img}
              img={data.img}
              color={data.color}
              size={data.size}
              operation={operation}
              setOperation={setOperation}
              calcSum={calcSum}
              setCalcSum={setCalcSum}
              prevSum={prevSum}
              setPrevSum={setPrevSum}
            />
          );
        })}
      </Box>
    </Container>
  );
};

export default ButtonBox;
