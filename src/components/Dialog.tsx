import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { Transition } from "../components/Transition";
import { dialogStyle } from "../styles/dialog";
import { Button2 } from "./Buttons";
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
      <DialogTitle className="dialog_title_container">
        {dialogTitle}
      </DialogTitle>
      <DialogActions>
        <Button2
          onClick={handleDialogActions(false)}
          variant="text"
          color="inherit"
        >
          No
        </Button2>
        <Button2 onClick={handleDialogActions(true)} variant="contained">
          Yes
        </Button2>
      </DialogActions>
    </Dialog>
  );
};

export default MuiDialog;
