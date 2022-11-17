import styled from "styled-components";
import { WeatherData } from "../type/types";

interface Props {
  weather: WeatherData | undefined;
}

const PrintWeather = ({ weather }: Props) => {
  return (
    <Container>
      <WeatherInfo>{weather?.name}</WeatherInfo>
      <WeatherInfo>{weather?.weather[0].description}</WeatherInfo>
    </Container>
  );
};

export default PrintWeather;

const Container = styled.div``;

const WeatherInfo = styled.h2`
  color: white;
`;
