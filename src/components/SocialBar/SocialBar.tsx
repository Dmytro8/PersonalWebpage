import React, { FC } from "react";
import {
  SocialLink,
  SocialBarDiv,
  SocialBarContainer
} from "./SocialBar.styled";

import FacebookIcon from "@material-ui/icons/Facebook";
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
        href="https://www.facebook.com/dm.patalakha/"
        target="_blank"
      >
        <FacebookIcon />
      </SocialLink>
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
