import styled from "styled-components";

type HeaderProps = {
  size: string;
};

export const HeaderBody = styled.header`
  height: ${({ size }: HeaderProps) => {
    if (size === "small") return "50px";
    else return "10vh";
  }};
  display: grid;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1500;
  background: ${({ theme }) => theme.body};
  transition: height 0.3s;
`;

export const HeaderContainer = styled.div`
  width: 90vw;
  display: grid;
  justify-self: center;
  align-content: center;
  grid-auto-flow: column;
  grid-template-columns: 1fr auto 1fr;
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr auto auto;
  }
`;

export const HeaderRight = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: end;
`;
