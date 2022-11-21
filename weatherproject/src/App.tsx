import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import styled from "styled-components";
import { WeatherData } from "./type/types";
import Clear from "./assets/clear.jpg";
import Rain from "./assets/rain.jpg";
import Clouds from "./assets/cloud.jpg";
import Drizzle from "./assets/drizzle.jpg";
import Snow from "./assets/snow.jpg";
import Thunderstorm from "./assets/thunderstorm.jpg";
import InsertCityName from "./components/InsertCityName";
import PrintWeather from "./components/PrintWeather";
import TopTitle from "./components/TopTitle";

const weatherImg: {
  [key: string]: string;
} = {
  Clouds: Clouds,
  Clear: Clear,
  Rain: Rain,
  Drizzle: Drizzle,
  Snow: Snow,
  Thunderstorm: Thunderstorm,
};

const api = {
  url: process.env.REACT_APP_API_URL,
  api_key: process.env.REACT_APP_WEATHER_API_KEY,
};

function App() {
  const [cityName, setCityName] = useState("seoul");
  const [weather, setWeather] = useState<WeatherData>();
  const [weatherName, setWeatherName] = useState("");

  const getWeather = async () => {
    const response = await axios.get(`${api.url}?q=${cityName}&appid=${api.api_key}`);

    setWeather(response.data);
    setWeatherName(response.data.weather[0].main);
  };

  useEffect(() => {
    getWeather();
  }, [cityName]);

  return (
    <Container img={weatherImg[weatherName]}>
      <Box>
        <TopTitle />
        <ProjectTitle>{`WEATHER PROJECT`}</ProjectTitle>
        <PrintWeather weather={weather} />
        <InsertCityName setCityName={setCityName} />
      </Box>
    </Container>
  );
}

export default App;

interface ContainerProps {
  img: string | undefined;
}

const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  transition: all 0.2s ease-in;
`;

const Box = styled.div`
  text-align: center;
  border: 3px solid white;
  border-radius: 10px;
  padding: 5rem;
  background-color: rgba(255, 255, 255, 0.3);
`;
const ProjectTitle = styled.h1`
  color: white;
  margin: 1rem;
`;
