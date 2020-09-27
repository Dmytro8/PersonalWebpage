import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { NavbarWrapper, NavbarList, NavbarItem } from "./NavBar.styled";
import { Link } from "react-scroll";

type NavBarProps = {
  size: string;
};

const NavBar: FC<NavBarProps> = ({ size }) => {
  const { t } = useTranslation();
  return (
    <NavbarWrapper>
      <NavbarList>
        <NavbarItem size={size}>
          <Link to="about" spy={true} smooth={true} duration={500}>
            {t("navigation.about")}
          </Link>
        </NavbarItem>
        <NavbarItem size={size}>
          <Link to="portfolio" spy={true} smooth={true} duration={500}>
            {t("navigation.portfolio")}
          </Link>
        </NavbarItem>
        <NavbarItem size={size}>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            {t("navigation.contact")}
          </Link>
        </NavbarItem>
      </NavbarList>
    </NavbarWrapper>
  );
};

export default NavBar;
