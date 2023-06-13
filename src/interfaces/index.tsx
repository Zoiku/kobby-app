export interface MuiDialogInterface {
  dialogTitle: string;
  openDialog: boolean;
  toggleOpenDialog: (open: boolean) => () => void;
  handleDialogActions: (open: boolean) => () => void;
}

export interface DrawerModalInterface {
  openState: boolean;
  toggleOpenState: (open: boolean) => () => void;
  children: React.ReactNode;
  title: string;
}

export interface ChartInterface {
  title: {
    title: string;
    titleHelper: string;
  };
}

export interface reducerActionsInterface {
  INPUT: string;
  SEND_REQUEST: string;
  FAILED_REQUEST: string;
  SUCCESSFUL_REQUEST: string;
}

export interface reducerActionInterface {
  type: string;
  prop: string;
  value: string;
}
