import { DrawerModalInterface } from "../interfaces";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Puller, iOS } from "./SwipeableDrawerComponents";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { modalBoxStyle2 } from "../styles/box";
import { IconButton, Stack } from "@mui/material";
import { Close } from "@mui/icons-material/";
import Slide from "@mui/material/Slide/Slide";
import "../styles/DrawerModal.scss";

const DrawerModal = ({
  openState,
  toggleOpenState,
  children,
  title,
}: DrawerModalInterface) => {
  return (
    <>
      <SwipeableDrawer
        className="DrawerComponent"
        keepMounted
        variant="temporary"
        anchor="bottom"
        open={openState}
        onOpen={toggleOpenState(true)}
        onClose={toggleOpenState(false)}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
      >
        <Box>
          <div className="drawer-title-container">
            <Puller />
            <div>{title}</div>
          </div>
          <div className="drawer-body-container">{children}</div>
        </Box>
      </SwipeableDrawer>

      <Modal
        className="ModalComponent"
        open={openState}
        onClose={toggleOpenState(false)}
        keepMounted
      >
        <Slide in={openState} direction="left">
          <Box sx={modalBoxStyle2}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              className="modal_title_container"
            >
              <div>{title}</div>
              <IconButton onClick={toggleOpenState(false)} sx={{ padding: 0 }}>
                <Close />
              </IconButton>
            </Stack>
            <div className="modal_body_container">{children}</div>
          </Box>
        </Slide>
      </Modal>
    </>
  );
};

export default DrawerModal;
