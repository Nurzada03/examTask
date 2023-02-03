import React from "react";

const ListCalculator = ({ state }) => {
  return (
    <>
      <ul>
        {state.history.map((item) => (
          <li key={item.id}>{item}</li>
        ))}
      </ul>
      <h1>Result: {state.result}</h1>
    </>
  );
};

export default ListCalculator;
