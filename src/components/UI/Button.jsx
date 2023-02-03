import React from "react";

import styled from "styled-components";

const Button = ({ children, onClick, disabled }) => {
  return (
    <div>
      <StyledButton disabled={disabled} onClick={onClick}>
        {children}
      </StyledButton>
    </div>
  );
};

export default Button;

const StyledButton = styled.button`
  padding: 20px;
  width: 80px;
  border-radius: 10px;
`;
