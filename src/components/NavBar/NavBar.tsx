import React, { FC } from "react";
import { NavbarWrapper, NavbarList, NavbarItem } from "./NavBar.styled";
import { Link } from "react-scroll";

type NavBarProps = {
  size: string;
};

const NavBar: FC<NavBarProps> = ({ size }) => {
  return (
    <NavbarWrapper>
      <NavbarList>
        <NavbarItem size={size}>
          <Link to="about" spy={true} smooth={true} duration={500}>
            About
          </Link>
        </NavbarItem>
        <NavbarItem size={size}>
          <Link to="portfolio" spy={true} smooth={true} duration={500}>
            Portfolio
          </Link>
        </NavbarItem>
        <NavbarItem size={size}>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            Contact
          </Link>
        </NavbarItem>
      </NavbarList>
    </NavbarWrapper>
  );
};

export default NavBar;
