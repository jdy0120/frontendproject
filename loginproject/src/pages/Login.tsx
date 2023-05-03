import React, { useState } from "react";
import Inputbox from "../components/Inputbox/Inputbox";
import Button from "../components/button/Button";
import { useDispatch } from "react-redux";
import { setLogin } from "../reducers/loginSlice";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LoginBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  gap: 10px;
`;

const LoginContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Login = () => {
  const [id, setId] = useState<string>("");
  const [pw, setPw] = useState<string>("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handlePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  };

  const handleLogin = () => {
    if (id === "admin" && pw === "admin") {
      dispatch(setLogin({ id, name: "doyeon" }));
      navigate("/admin/main");
    } else {
      alert("fail");
    }
  };

  return (
    <LoginContainer>
      <LoginBoxContainer>
        <Inputbox onChange={handleId} type="text" />
        <Inputbox onChange={handlePw} type="password" />
        <Button text={"Login"} onClick={handleLogin} />
      </LoginBoxContainer>
    </LoginContainer>
  );
};

export default Login;
