import React, { FC, useState, Dispatch, SetStateAction } from "react";
import { Header } from "../../components/Header";
// @ts-ignore
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { Drawer } from "../../components/Drawer";
import {
  MainSectionContainer,
  MainContent,
  FixedBar,
  FixedBarContainer
} from "./MainSection.styled";
import { Greeting } from "../../components/Greeting";
import { SocialBar } from "../../components/SocialBar";
import { ScrollArrow } from "../../components/ScrollArrow";

type MainSectionPropsType = {
  theme: string;
  toggleTheme: () => void;
};
export type DrawerActionType = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const MainSection: FC<MainSectionPropsType> = ({ theme, toggleTheme }) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (event: any) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };
  return (
    <>
      <MainSectionContainer id="main">
        <Header
          theme={theme}
          toggleTheme={toggleTheme}
          open={open}
          setOpen={setOpen}
        />
        <MainContent>
          <Greeting />
          <FixedBar>
            <FixedBarContainer>
              <SocialBar size="small" inDrawer={false} />
              <ScrollArrow />
            </FixedBarContainer>
          </FixedBar>
        </MainContent>
      </MainSectionContainer>
      <SwipeableDrawer
        anchor={"top"}
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <Drawer open={open} setOpen={setOpen} />
      </SwipeableDrawer>
    </>
  );
};

export default MainSection;
