export interface MuiDialogInterface {
  dialogTitle: string;
  openDialog: boolean;
  toggleOpenDialog: (open: boolean) => () => void;
  handleDialogActions: (open: boolean) => () => void;
}

export interface MuiModalInterface {
  openModal: boolean;
  toggleOpenModal: (open: boolean) => () => void;
  children: React.ReactNode;
  modalTitle: string;
}

export interface chartInterface {
  title: {
    title: string;
    titleHelper: string;
  };
}
