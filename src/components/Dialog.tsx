import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { Transition } from "../components/Transition";
import { dialogStyle } from "../styles/dialog";
import { Button2 } from "./Buttons";
import { MuiDialogInterface } from "../tables/Inventory";

const MuiDialog = ({
  dialogTitle,
  openDeleteDialog,
  toggleOpenDeleteDialog,
}: MuiDialogInterface) => {
  return (
    <Dialog
      open={openDeleteDialog}
      TransitionComponent={Transition}
      keepMounted
      onClose={toggleOpenDeleteDialog(false)}
      aria-describedby="alert-dialog-slide-description"
      sx={dialogStyle}
    >
      <DialogTitle className="dialog_title_container">{dialogTitle}</DialogTitle>
      <DialogActions>
        <Button2
          onClick={toggleOpenDeleteDialog(false)}
          variant="text"
          color="inherit"
        >
          No
        </Button2>
        <Button2 variant="contained">Yes</Button2>
      </DialogActions>
    </Dialog>
  );
};

export default MuiDialog;
