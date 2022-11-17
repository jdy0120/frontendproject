import React, { useState } from "react";
import styled from "styled-components";

interface Props {
  setCityName: React.Dispatch<React.SetStateAction<string>>;
}

const InsertCityName = ({ setCityName }: Props) => {
  const [city, setCity] = useState("seoul");

  const changeCityName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const clickChangeCity = () => {
    setCityName(city);
  };

  return (
    <Container>
      <InputCityName type="text" onChange={changeCityName} value={city} />
      <SearchButton onClick={clickChangeCity}>{`날씨 보기`}</SearchButton>
    </Container>
  );
};

export default InsertCityName;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InputCityName = styled.input`
  border: none;
  border-radius: 10px;
  font-size: 20px;
`;
const SearchButton = styled.button`
  background-color: #81d1ff;
  border: none;
  padding: 10px;
  color: white;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }
`;
