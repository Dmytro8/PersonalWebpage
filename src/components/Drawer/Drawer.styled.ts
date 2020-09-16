import styled from "styled-components";

export const DrawerBody = styled.div`
  background: ${({ theme }) => theme.body};
  height: 60vh;
  color: ${({ theme }) => theme.text};
  padding-top: 10vh;
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

export const DrawerBar = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  padding: 20px 0;
`;

export const DrawerSocialBar = styled.div`
  display: grid;
  align-content: start;
  padding: 0 20px;
  gap: 20px;
  position: relative;
  svg {
    font-size: 3rem;
  }
  &:after {
    position: absolute;
    right: 0;
    content: "";
    width: 1px;
    height: 100%;
    background: ${({ theme }) => theme.text};
    opacity: 0.2;
  }
`;

export const DrawerNavbar = styled.div`
  padding: 0 20px;
`;

export const DrawerNavList = styled.ul`
  list-style: none;
  display: grid;
  gap: 20px;
`;

export const DrawerNavItem = styled.li`
  cursor: pointer;
  font-size: 2rem;
`;

export const DrawerLanguageBar = styled.div`
  display: grid;
  justify-content: start;
  align-self: end;
  padding: 0 0 25px 25px;
`;

export const DrawerLink = styled.a`
  color: ${({ theme }) => theme.text};
`;
