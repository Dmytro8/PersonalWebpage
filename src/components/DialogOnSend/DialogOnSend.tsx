import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";
import {
  DialogActions,
  DialogContainer,
  DialogGetBack,
  DialogIcon,
  DialogLink
} from "./DialogOnSend.styled";
import { DialogContent, DialogContentText } from "@material-ui/core";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type DialogOnSend = {
  isFormSuccess: boolean;
  open: boolean;
  handleClose: () => void;
};
const DialogOnSend: FC<DialogOnSend> = ({
  open,
  handleClose,
  isFormSuccess
}) => {
  const { t } = useTranslation();
  return (
    <div>
      <DialogContainer
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
      >
        <DialogIcon isFormSuccess={isFormSuccess}>
          {isFormSuccess ? <CheckCircleIcon /> : <ErrorIcon />}
        </DialogIcon>
        <DialogTitle>
          {isFormSuccess ? t("dialog.titleSuccess") : t("dialog.titleFailed")}
        </DialogTitle>
        <DialogContent>
          <DialogContentText color="inherit">
            {isFormSuccess
              ? t("dialog.contentSuccess")
              : t("dialog.contentFailed")}
          </DialogContentText>
          {isFormSuccess ? (
            <DialogContentText color="inherit">
              {t("dialog.wish")}
            </DialogContentText>
          ) : (
            <>
              <DialogContentText>
                <DialogLink href={`mailto:${t("dialog.email")}`}>
                  {t("dialog.email")}
                </DialogLink>
              </DialogContentText>
              <DialogContentText>
                <DialogLink href={`tel:${t("dialog.phone")}`}>
                  {t("dialog.phone")}
                </DialogLink>
              </DialogContentText>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <DialogGetBack onClick={handleClose}>
            {t("dialog.back")}
          </DialogGetBack>
        </DialogActions>
      </DialogContainer>
    </div>
  );
};

export default DialogOnSend;
