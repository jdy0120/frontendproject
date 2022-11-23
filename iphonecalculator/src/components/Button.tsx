import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import div from "../assets/div.png";
import equal from "../assets/equal.png";
import minus from "../assets/minus.png";
import mul from "../assets/mul.png";
import percent from "../assets/percent.png";
import plus from "../assets/plus.png";
import plusminus from "../assets/plusminus.png";
import AC from "../assets/AC.png";
import zero from "../assets/0.png";
import one from "../assets/1.png";
import two from "../assets/2.png";
import three from "../assets/3.png";
import four from "../assets/4.png";
import five from "../assets/5.png";
import six from "../assets/6.png";
import seven from "../assets/7.png";
import eight from "../assets/8.png";
import nine from "../assets/9.png";
import dot from "../assets/dot.png";

type ChangeImg = {
  [key: string]: string;
};

const changeImg: ChangeImg = {
  AC: AC,
  div: div,
  equal: equal,
  minus: minus,
  mul: mul,
  percent: percent,
  plus: plus,
  plusminus: plusminus,
  dot: dot,
  "0": zero,
  "1": one,
  "2": two,
  "3": three,
  "4": four,
  "5": five,
  "6": six,
  "7": seven,
  "8": eight,
  "9": nine,
};

interface ContainerProps {
  imgName: string;
  color: string;
  size: number;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ size }) => (size == 1 ? `50%` : `40px`)};
  background-color: ${({ color }) => color};
  grid-column: span ${({ size }) => size};
  cursor: pointer;

  h1 {
    color: black;
  }
  img {
    max-width: 50%;
    height: auto;
  }

  ${({ imgName }) =>
    imgName === "0"
      ? css`
          justify-content: start;
          padding-left: 30px;
        `
      : css``}

  ${({ imgName }) =>
    imgName === "dot"
      ? css`
          align-items: end;
          padding-bottom: 20px;
        `
      : css``}
`;

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const oper = ["div", "plus", "minus", "mul"];

const calculator = (operation: string, prevSum: number, calcSum: string) => {
  const nowSum = parseFloat(calcSum);
  if (operation === "plus") {
    return prevSum + nowSum;
  }

  if (operation === "minus") {
    return prevSum - nowSum;
  }

  if (operation === "mul") {
    return prevSum * nowSum;
  }

  if (operation === "div") {
    return prevSum / nowSum;
  }

  return 0;
};

interface Props {
  img: string;
  color: string;
  size: number;
  operation: string;
  setOperation: React.Dispatch<React.SetStateAction<string>>;
  calcSum: string;
  setCalcSum: React.Dispatch<React.SetStateAction<string>>;
  prevSum: number;
  setPrevSum: React.Dispatch<React.SetStateAction<number>>;
}

const Button = ({ img, color, size, operation, setOperation, calcSum, setCalcSum, prevSum, setPrevSum }: Props) => {
  const clickButton = () => {
    if (numbers.includes(img)) {
      setCalcSum((calcSum) => String(parseFloat(calcSum + img)));
      return;
    } else if (oper.includes(img)) {
      setPrevSum(() => parseFloat(calcSum));
      setCalcSum("0");
      switch (img) {
        case "plus":
          setOperation("plus");
          break;
        case "minus":
          setOperation("minus");
          break;
        case "mul":
          setOperation("mul");
          break;
        case "div":
          setOperation("div");
          break;
      }
    } else {
      switch (img) {
        case "AC":
          setOperation("");
          setCalcSum("0");
          setPrevSum(0);
          break;

        case "plusminus":
          setCalcSum(String(parseFloat(calcSum) * -1));
          break;

        case "percent":
          setCalcSum(String(parseFloat(calcSum) / 100));
          break;

        case "dot":
          calcSum.includes(".") ? setCalcSum(calcSum) : setCalcSum(calcSum + ".");
          break;

        case "equal":
          setCalcSum(String(calculator(operation, prevSum, calcSum)));
          break;
      }
    }
  };

  return (
    <Container onClick={() => clickButton()} imgName={img} color={color} size={size}>
      <img src={changeImg[img]} alt="" />
    </Container>
  );
};

export default Button;
