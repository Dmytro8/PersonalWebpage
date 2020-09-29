import styled from "styled-components";

type DialogIconProps = {
  isFormSuccess: boolean;
};
export const DialogIcon = styled.div<DialogIconProps>`
  color: ${({ isFormSuccess }) => (isFormSuccess ? "#219a00" : "#f44336")};
  text-align: center;
  padding-top: 20px;
  svg {
    font-size: calc(3rem + 2vw);
  }
`;

export const DialogActions = styled.div`
  padding: 0 24px 24px 24px;
  display: grid;
  justify-content: center;
`;

export const DialogLink = styled.a`
  color: #000000de;
`;
