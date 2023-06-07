import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { MuiModalInterface } from "../interfaces/index";
import { modalBoxStyle } from "../styles/box";
import { IconButton, Stack } from "@mui/material";
import { Close } from "@mui/icons-material/";

const MuiModal = ({
  openModal,
  toggleOpenModal,
  modalTitle,
  children,
}: MuiModalInterface) => {
  return (
    <Modal open={openModal} onClose={toggleOpenModal(false)} keepMounted>
      <Box sx={modalBoxStyle}>
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
    </Modal>
  );
};

export default MuiModal;
