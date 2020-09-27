import React, { FC } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { ProgressContainer } from "./Progress.styled";

type ProgressProps = {
  color: string;
};
const Progress: FC<ProgressProps> = ({ color }) => {
  return (
    <ProgressContainer color={color}>
      <CircularProgress color="inherit" />
    </ProgressContainer>
  );
};

export default Progress;
