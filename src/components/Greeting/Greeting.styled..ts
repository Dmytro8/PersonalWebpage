import { InnerContainer } from "./../../styles/common";
import styled from "styled-components";

export const GreetingContainer = styled(InnerContainer)``;

export const GreetingBody = styled.div`
  display: grid;
  align-content: start;
  margin-top: 18vh;
  button {
    margin-top: 20px;
    padding: 1.4rem 0;
  }
  a {
    padding: 1.4rem 3rem;
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
  font-weight: 400;
  letter-spacing: 0.05em;
  padding: 5px 0;
`;

export const GreetingDeveloperUnderline = styled.span`
  color: ${({ theme }) => theme.text};
  display: inline;
`;
