import styled from "styled-components";

export const ButtonBody = styled.button`
  background: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.body};
  padding: 1.4rem 3rem;
  width: fit-content;
  border-radius: 5px;
  font-size: calc(14px + 0.5vw);
  letter-spacing: 0.05em;
  border: none;
  cursor: pointer;
  filter: drop-shadow(5px 5px 6px rgba(0, 0, 0, 0.25));
`;
