import React, {
  FC,
  Dispatch,
  SetStateAction,
  useEffect,
  useState
} from "react";
import { Logo } from "../Logo";
import { HeaderBody, HeaderContainer, HeaderRight } from "./Header.styled";
import { Burger } from "../Burger";
import { Theme } from "../Theme";
import { useScroll } from "../../hooks/useScroll";
import { LanguageBar } from "../LanguageBar";
import { NavBar } from "../NavBar";

type HeaderPropsType = {
  theme: string;
  open: boolean;
  toggleTheme: () => void;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const Header: FC<HeaderPropsType> = ({ theme, toggleTheme, open, setOpen }) => {
  const [size, setSize] = useState("big");
  const scrollY = useScroll();

  useEffect(() => {
    if (scrollY > 300) setSize("small");
    else setSize("big");
    return () => {};
  }, [scrollY]);

  return (
    <HeaderBody size={size}>
      <HeaderContainer>
        <Logo size={size} />
        <NavBar size={size} />
        <HeaderRight>
          <Theme size={size} theme={theme} toggleTheme={toggleTheme} />
          <Burger size={size} open={open} setOpen={setOpen} />
          <LanguageBar isDrawer={false} />
        </HeaderRight>
      </HeaderContainer>
    </HeaderBody>
  );
};

export default Header;
