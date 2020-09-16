import React, { FC, Dispatch, SetStateAction } from "react";
import { StyledBurger } from "./Burger.styled";

type BurgerProps = {
  open: boolean;
  size: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const Burger: FC<BurgerProps> = ({ setOpen, open, size }) => {
  return (
    <StyledBurger size={size} open={open} onClick={() => setOpen(!open)}>
      <span />
      <span />
      <span />
    </StyledBurger>
  );
};

export default Burger;
