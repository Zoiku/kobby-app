import Dialog from "@mui/material/Dialog";
import { Transition } from "../components/Transition";
import {
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material/";
import { dialogStyle } from "../styles/dialog";
import { Button1 } from "./Buttons";
import { MuiDialogInterface } from "../interfaces/index";

const MuiDialog = ({
  dialogTitle,
  openDialog,
  toggleOpenDialog,
  handleDialogActions,
}: MuiDialogInterface) => {
  return (
    <Dialog
      open={openDialog}
      TransitionComponent={Transition}
      keepMounted
      onClose={toggleOpenDialog(false)}
      aria-describedby="alert-dialog-slide-description"
      sx={dialogStyle}
    >
      <DialogContent>
        <DialogContentText className="dialog_title_container">
          {dialogTitle}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button1
          onClick={handleDialogActions(false)}
          variant="text"
          color="inherit"
        >
          No
        </Button1>
        <Button1
          onClick={handleDialogActions(true)}
          variant="text"
          color="inherit"
        >
          Yes
        </Button1>
      </DialogActions>
    </Dialog>
  );
};

export default MuiDialog;
