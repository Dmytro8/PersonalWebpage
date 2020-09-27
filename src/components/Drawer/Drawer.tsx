import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import {
  DrawerBody,
  DrawerNavbar,
  DrawerNavList,
  DrawerNavItem,
  DrawerLanguageBar,
  DrawerBar
} from "./Drawer.styled";
import { Link } from "react-scroll";
import { LanguageBar } from "../LanguageBar";
import { SocialBar } from "../SocialBar";

type DrawerProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const Drawer: FC<DrawerProps> = ({ setOpen, open }) => {
  const { t } = useTranslation();
  return (
    <DrawerBody>
      <DrawerBar>
        <SocialBar size="big" inDrawer={true} />
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
                {t("navigation.about")}
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
                {t("navigation.portfolio")}
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
                {t("navigation.contact")}
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
