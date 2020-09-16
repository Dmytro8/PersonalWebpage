import React, { FC } from "react";
import {
  DrawerBody,
  DrawerSocialBar,
  DrawerNavbar,
  DrawerNavList,
  DrawerNavItem,
  DrawerLanguageBar,
  DrawerBar,
  DrawerLink
} from "./Drawer.styled";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Link } from "react-scroll";
import { LanguageBar } from "../LanguageBar";

type DrawerProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const Drawer: FC<DrawerProps> = ({ setOpen, open }) => {
  return (
    <DrawerBody>
      <DrawerBar>
        <DrawerSocialBar>
          <DrawerLink
            href="https://www.facebook.com/dm.patalakha/"
            target="_blank"
          >
            <FacebookIcon />
          </DrawerLink>
          <DrawerLink href="https://github.com/Dmytro8" target="_blank">
            <GitHubIcon />
          </DrawerLink>
          <DrawerLink
            href="https://www.linkedin.com/in/dmpatalakha/"
            target="_blank"
          >
            <LinkedInIcon />
          </DrawerLink>
        </DrawerSocialBar>
        <DrawerNavbar>
          <DrawerNavList>
            <DrawerNavItem>
              <Link
                onClick={() => setOpen(!open)}
                to="about"
                spy={true}
                smooth={true}
                duration={500}
              >
                About
              </Link>
            </DrawerNavItem>
            <DrawerNavItem>
              <Link
                onClick={() => setOpen(!open)}
                to="portfolio"
                spy={true}
                smooth={true}
                duration={500}
              >
                Portfolio
              </Link>
            </DrawerNavItem>
            <DrawerNavItem>
              <Link
                onClick={() => setOpen(!open)}
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
              >
                Contact
              </Link>
            </DrawerNavItem>
          </DrawerNavList>
        </DrawerNavbar>
      </DrawerBar>
      <DrawerLanguageBar>
        <LanguageBar isDrawer={true} />
      </DrawerLanguageBar>
    </DrawerBody>
  );
};

export default Drawer;
