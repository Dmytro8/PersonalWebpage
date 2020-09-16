import React, { FC } from "react";
import { LogoWrapper, LogoUpper, LogoBottom } from "./Logo.styled";
import { Link } from "react-scroll";

export type LogoProps = {
  size: string;
};

const Logo: FC<LogoProps> = ({ size }) => {
  return (
    <Link to="main" spy={true} smooth={true} duration={500}>
      <LogoWrapper id="logo">
        <LogoUpper size={size}>dmytro</LogoUpper>
        <LogoBottom size={size}>patalakha</LogoBottom>
      </LogoWrapper>
    </Link>
  );
};

export default Logo;
