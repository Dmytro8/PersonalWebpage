import styled from "styled-components";

type ButtonBodyProps = {
  size: "small" | "medium" | "big";
};
export const ButtonBody = styled.button<ButtonBodyProps>`
  background: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.body};
  padding: ${({ size }) => {
    if (size === "small") return "1rem 2rem";
    else if (size === "medium") return "1.2rem 2.5rem";
    else return "1.4rem 3rem";
  }};
  width: fit-content;
  border-radius: 5px;
  font-size: ${({ size }) => {
    if (size === "small") return "calc(10px + 0.5vw)";
    else if (size === "medium") return "calc(12px + 0.5vw)";
    else return "calc(14px + 0.5vw)";
  }};
  letter-spacing: 0.05em;
  border: none;
  cursor: pointer;
  filter: drop-shadow(5px 5px 6px rgba(0, 0, 0, 0.25));
  font-weight: 700;
`;
