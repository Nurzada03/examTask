import React, { useEffect, useState } from "react";
import Button from "../UI/Button";
import styled from "styled-components";

const Header = () => {
  const [color, setColor] = useState("blue");
  const [colorNight, setColorNight] = useState("white");

  const colorChangeHandler = (color) => {
    setColor(color);
  };
  const colorChangeHandlerNight = (colorNight) => {
    setColor(colorNight);
  };

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  useEffect(() => {
    document.body.style.backgroundColor = colorNight;
  }, [colorNight]);

  return (
    <StyledHeader>
      <Button
        onClick={() => {
          colorChangeHandler("yellow");
        }}
      >
        дневная тема
      </Button>
      <Button
        onClick={() => {
          colorChangeHandlerNight("black");
        }}
      >
        ночная тема
      </Button>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  width: 100%;
  height: 150px;
  background-color: aqua;
  display: flex;
  justify-content: center;
  gap: 50px;
`;
