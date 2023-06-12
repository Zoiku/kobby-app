import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { MuiModalInterface } from "../interfaces/index";
import { modalBoxStyle2 } from "../styles/box";
import { IconButton, Stack } from "@mui/material";
import { Close } from "@mui/icons-material/";
import Slide from "@mui/material/Slide/Slide";

const MuiModal = ({
  openModal,
  toggleOpenModal,
  modalTitle,
  children,
}: MuiModalInterface) => {
  return (
    <Modal open={openModal} onClose={toggleOpenModal(false)} keepMounted>
      <Slide in={openModal} direction="left">
        <Box sx={modalBoxStyle2}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            className="modal_title_container"
          >
            <div>{modalTitle}</div>
            <IconButton onClick={toggleOpenModal(false)} sx={{ padding: 0 }}>
              <Close />
            </IconButton>
          </Stack>
          <div className="modal_body_container">{children}</div>
        </Box>
      </Slide>
    </Modal>
  );
};

export default MuiModal;
