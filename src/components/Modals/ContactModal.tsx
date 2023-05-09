import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Link,
  Typography,
} from "@mui/material";

type PropsType = {
  isOpen: boolean;
  closeModal: () => void;
};

export const ContactModal = ({ closeModal, isOpen }: PropsType) => (
  <Dialog
    open={isOpen}
    onClose={closeModal}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
    id="contact-modal"
  >
    <DialogTitle id="alert-dialog-title">Kontakt</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description" sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Box component="section" sx={{ display: "flex", flexDirection: "column" }}>
          <Typography component="span" variant="body2">
            Test sp. z o.o.
          </Typography>
          <Typography component="span" variant="body2">
            Ul. Testowa 404
          </Typography>
          <Typography component="span" variant="body2">
            01-010 Warszawa
          </Typography>
        </Box>
        <Box component="section" sx={{ display: "flex", flexDirection: "column" }}>
          <Typography component="span" variant="body2">
            Telefon +48 22 800 70 70
          </Typography>
          <Typography component="span" variant="body2">
            Email <Link href="mailto:test@test.com">test@test.com</Link>
          </Typography>{" "}
        </Box>
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={closeModal}>Zamknij</Button>
    </DialogActions>
  </Dialog>
);
