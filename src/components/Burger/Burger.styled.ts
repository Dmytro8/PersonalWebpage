import styled from "styled-components";

type StyledBurgerPropsType = {
  open: boolean;
  size: string;
};

export const StyledBurger = styled.button<StyledBurgerPropsType>`
  justify-self: end;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: ${({ size }) => (size === "small" ? "1.5rem" : "2rem")};
  height: ${({ size }) => (size === "small" ? "1.5rem" : "2rem")};
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  &:focus {
    outline: none;
  }

  span {
    width: ${({ size }) => (size === "small" ? "1.5rem" : "2rem")};
    height: 0.25rem;
    background: ${({ theme }) => theme.accent};
    border-radius: 10px;
    transition: all 0.2s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
  @media screen and (min-width: 800px) {
    display: none;
  }
`;
