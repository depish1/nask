import {
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

export const HelpModal = ({ closeModal, isOpen }: PropsType) => (
  <Dialog
    open={isOpen}
    onClose={closeModal}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
    id="help-modal"
  >
    <DialogTitle id="alert-dialog-title">Pomoc</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description" sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Typography component="span" variant="body1">
          Pomoc możesz uzyskać na wiele sposobów. My polecamy skorzystanie z niezawodnego wujka Google.
        </Typography>
        <Link href="http://www.google.com" rel="noopener noreferrer" target="_blank">
          Zapytaj wujka o pomoc
        </Link>
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={closeModal}>Zamknij</Button>
    </DialogActions>
  </Dialog>
);
