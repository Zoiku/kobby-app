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

export interface MuiMobileDrawerInterface {
  openDrawer: boolean;
  toggleOpenDrawer: (open: boolean) => () => void;
  children: React.ReactNode;
  drawerTitle: string;
}

export interface DrawerModalInterface {
  openState: boolean;
  toggleOpenState: (open: boolean) => () => void;
  children: React.ReactNode;
  title: string;
}

export interface chartInterface {
  title: {
    title: string;
    titleHelper: string;
  };
}
