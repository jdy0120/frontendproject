import React from "react";
import styled from "styled-components";
import WeekBox from "./WeekBox";
import AllDay from "./AllDay";

const Container = styled.div`
  width: 100%;
  flex: 1;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

interface Props {
  nowDate: Date;
  setNowDate: React.Dispatch<React.SetStateAction<Date>>;
  clickedDate: Date | undefined;
  setClickedDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
}

const monthList = (nowDate: Date) => {
  const nowYear = nowDate.getFullYear();
  const nowMonth = nowDate.getMonth();

  const dayOneWeek = new Date(nowYear, nowMonth, 1).getDay();
  const dayLastWeek = new Date(nowYear, nowMonth + 1, 0).getDay();

  const result: Date[] = [];
  const prevMonthEnd = new Date(nowYear, nowMonth, 0).getDate();
  const nowMonthEnd = new Date(nowYear, nowMonth + 1, 0).getDate();

  for (let i = dayOneWeek - 1; i >= 0; i--) {
    result.push(new Date(nowYear, nowMonth - 1, prevMonthEnd - i));
  }

  for (let i = 1; i <= nowMonthEnd; i++) {
    result.push(new Date(nowYear, nowMonth, i));
  }

  for (let i = 1; i < 7 - dayLastWeek; i++) {
    result.push(new Date(nowYear, nowMonth + 1, i));
  }

  return result;
};

const DateBox = ({ nowDate, setNowDate, clickedDate, setClickedDate }: Props) => {
  const allDay: Date[] = monthList(nowDate);

  const weeks = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <Container>
      {weeks.map((week) => {
        return <WeekBox key={week} weekName={week} />;
      })}
      {allDay.map((day: Date) => {
        return <AllDay key={day.getTime()} day={day} nowDate={nowDate} setNowDate={setNowDate} clickedDate={clickedDate} setClickedDate={setClickedDate} />;
      })}
    </Container>
  );
};

export default DateBox;
