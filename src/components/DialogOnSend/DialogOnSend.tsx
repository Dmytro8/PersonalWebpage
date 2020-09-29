import React, { FC } from "react";
import Dialog from "@material-ui/core/Dialog";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";
import { DialogActions, DialogIcon, DialogLink } from "./DialogOnSend.styled";
import { DialogContent, DialogContentText } from "@material-ui/core";
import { Button } from "../Button";

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
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
      >
        <DialogIcon isFormSuccess={isFormSuccess}>
          {isFormSuccess ? <CheckCircleIcon /> : <ErrorIcon />}
        </DialogIcon>
        <DialogTitle>
          {isFormSuccess
            ? "Thank you for getting in touch!"
            : "Sorry, an error occurred during the submit process."}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {isFormSuccess
              ? "I appreciate you contacting me. I will get back in touch with you soon!"
              : "Please, contact me via email or phone:"}
          </DialogContentText>
          {isFormSuccess ? (
            <DialogContentText>Have a great day!</DialogContentText>
          ) : (
            <>
              <DialogContentText>
                <DialogLink href="mailto:dm.patalakha@gmail.com">
                  dm.patalakha@gmail.com
                </DialogLink>
              </DialogContentText>
              <DialogContentText>
                <DialogLink href="tel:+48511711068">
                  +48&nbsp;511&nbsp;711&nbsp;068
                </DialogLink>
              </DialogContentText>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button text="Back to the page" size="small" onClick={handleClose} />
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DialogOnSend;
