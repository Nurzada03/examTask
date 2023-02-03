import React, { useReducer } from "react";
import styled from "styled-components";
import ListCalculator from "./ListCalculator";
import Button from "./UI/Button";
import Input from "./UI/Input";

const reducer = (state, action) => {
  switch (action.type) {
    case "PLUS":
      return {
        ...state,
        result: state.result + Number(state.input),
        input: "",
        history: [
          ...state.history,
          `${state.result} + ${state.input} = ${state.result + +state.input}`,
        ],
      };
    case "MINUS":
      return {
        ...state,
        result: state.result - Number(state.input),
        input: "",
        history: [
          ...state.history,
          `${state.result} - ${state.input} = ${state.result + +state.input}`,
        ],
      };
    case "MULTIPLY":
      return {
        ...state,
        result: state.result * Number(state.input),
        input: "",
        history: [
          ...state.history,
          `${state.result} * ${state.input} = ${state.result + +state.input}`,
        ],
      };
    case "DIVIDE":
      return {
        ...state,
        result: state.result / Number(state.input),
        input: "",
        history: [
          ...state.history,
          `${state.result} / ${state.input} = ${state.result + +state.input}`,
        ],
      };
    case "changeInput":
      return { ...state, input: action.input };
    default:
      return state;
  }
};
const INITIAL_STATE = {
  result: 0,
  input: "",
  history: [],
};
const MainContent = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const handleInputChange = (event) => {
    dispatch({ type: "changeInput", input: event.target.value });
  };
  const plusClick = () => {
    dispatch({ type: "PLUS" });
  };
  const minusClick = () => {
    dispatch({ type: "MINUS" });
  };
  const multiplYClick = () => {
    dispatch({ type: "MULTIPLY" });
  };
  const divideClick = () => {
    dispatch({ type: "DIVIDE" });
  };

  return (
    <Container>
      <Input type="number" value={state.input} onChange={handleInputChange} />
      <ListCalculator state={state} />
      <ContainerButton>
        <Button disabled={!state.input} onClick={plusClick}>
          +
        </Button>
        <Button disabled={!state.input} onClick={minusClick}>
          -
        </Button>
        <Button disabled={!state.input} onClick={multiplYClick}>
          *
        </Button>
        <Button disabled={!state.input} onClick={divideClick}>
          /
        </Button>
      </ContainerButton>
    </Container>
  );
};
export default MainContent;

const Container = styled.div`
  text-align: center;
`;
const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
