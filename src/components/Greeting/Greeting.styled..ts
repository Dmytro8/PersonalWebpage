import { InnerContainer } from "./../../styles/common";
import styled from "styled-components";

export const GreetingContainer = styled(InnerContainer)``;

export const GreetingBody = styled.div`
  display: grid;
  align-content: start;
  margin-top: 18vh;
  button {
    margin-top: 20px;
  }
`;

export const GreetingName = styled.h1`
  font-size: calc(40px + 2vw);
  letter-spacing: 0.05em;
  text-transform: capitalize;
  color: ${({ theme }) => theme.text};
  display: block;
  margin: 20px 0;
`;

export const GreetingNameAccent = styled.span`
  color: ${({ theme }) => theme.accent};
`;

export const GreetingDeveloper = styled.h3`
  font-size: calc(20px + 0.5vw);
  letter-spacing: 0.05em;
  padding: 5px 0;
`;

export const GreetingDeveloperUnderline = styled.span`
  color: ${({ theme }) => theme.text};
  display: inline;
  /* text-shadow: -1px 1px 0 ${({ theme }) => theme.text},
    1px 1px 0 ${({ theme }) => theme.text},
    1px -1px 0 ${({ theme }) => theme.text},
    -1px -1px 0 ${({ theme }) => theme.text}; */
  /* -webkit-text-stroke-width: 0.3px;
  -webkit-text-stroke-color: ${({ theme }) => theme.text}; */
`;
