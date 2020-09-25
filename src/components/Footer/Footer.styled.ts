import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: grid;
  justify-content: center;
  align-content: center;
  height: 200px;
`;

export const FooterBody = styled.p`
  font-size: 14px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.textOpacity};
`;
