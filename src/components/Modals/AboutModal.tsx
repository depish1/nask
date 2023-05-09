import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";

type PropsType = {
  isOpen: boolean;
  closeModal: () => void;
};

export const AboutModal = ({ closeModal, isOpen }: PropsType) => (
  <Dialog
    open={isOpen}
    onClose={closeModal}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
    id="about-modal"
  >
    <DialogTitle id="alert-dialog-title">O nas</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description" sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Typography component="span" variant="body1">
          Jesteśmy światowym liderem w jednej z przykładowych branż. Posiadamy wieloletnie doświadczenie, a nasze usługi
          wykonujemy z dbałością o każdy szczegół. Zapraszamy do korzystania z naszej strony.
        </Typography>
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={closeModal}>Zamknij</Button>
    </DialogActions>
  </Dialog>
);
