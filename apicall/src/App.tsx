import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const requestData = {
  url: `https://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getHoliDeInfo?`,
  serviceKey: process.env.REACT_APP_SERVICE_KEY,
  solYear: 2022,
  solMonth: 12,
};

type Holiday = {
  dataKind: string;
  dataName: string;
  isHoliday: string;
  locdate: number;
  seq: number;
};

const App = () => {
  const [holiday, setHoliday] = useState<Holiday[]>();

  const getData = async () => {
    try {
      const response = await axios.get(
        `${requestData.url}ServiceKey=${requestData.serviceKey}&solYear=${requestData.solYear}&solMonth=${requestData.solMonth}`
      );
      console.log(response);

      const saveData = [].concat(response.data.response.body.items.item);
      console.log(response);
      setHoliday(saveData);
    } catch (e) {}
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <p>{holiday ? holiday[0].locdate : `nodata`}</p>
    </>
  );
};

export default App;
