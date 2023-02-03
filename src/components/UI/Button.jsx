import React from "react";

import styled from "styled-components";

const Button = ({ children, onClick }) => {
  return (
    <div>
      <StyledButton onClick={onClick}>{children}</StyledButton>
    </div>
  );
};

export default Button;

const StyledButton = styled.button`
  padding: 20px;
  width: 80px;
  border-radius: 10px;
`;
