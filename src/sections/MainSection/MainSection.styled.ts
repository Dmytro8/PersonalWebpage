import { OuterContainer } from "./../../styles/common";
import styled from "styled-components";

export const MainSectionContainer = styled.section`
  padding-top: 10vh;
`;

export const MainContent = styled.div`
  height: 90vh;
  display: grid;
`;

export const FixedBar = styled.div`
  position: fixed;
  width: 100%;
  display: grid;
  bottom: 70px;
`;

export const FixedBarContainer = styled(OuterContainer)`
  grid-auto-flow: column;
`;
