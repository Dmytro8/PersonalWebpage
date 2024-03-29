import React, { FC } from "react";
import { SocialLink, SocialBarDiv } from "./SocialBar.styled";

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

export type SocialBarProps = {
  size: "small" | "big";
  inDrawer: boolean;
};

const SocialBar: FC<SocialBarProps> = ({ size, inDrawer }) => {
  return (
    <SocialBarDiv size={size} inDrawer={inDrawer}>
      <SocialLink
        inDrawer={inDrawer}
        href="https://github.com/Dmytro8"
        target="_blank"
      >
        <GitHubIcon />
      </SocialLink>
      <SocialLink
        inDrawer={inDrawer}
        href="https://www.linkedin.com/in/dmpatalakha/"
        target="_blank"
      >
        <LinkedInIcon />
      </SocialLink>
    </SocialBarDiv>
  );
};

export default SocialBar;
