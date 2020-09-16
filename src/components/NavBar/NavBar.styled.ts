import styled from "styled-components";

export const NavbarWrapper = styled.div`
  align-self: center;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const NavbarList = styled.ul`
  list-style: none;
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  gap: 20px;
`;

type NavbarItemProps = {
  size: string;
};
export const NavbarItem = styled.li<NavbarItemProps>`
  transition: font-size 0.3s;
  font-size: ${({ size }) => (size === "small" ? "18px" : "20px")};
  cursor: pointer;
  a {
    padding: 5px 10px;
  }
`;
