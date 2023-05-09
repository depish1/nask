import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router";

import { EPaths } from "Enums/EPaths";
import { useDeleteCity } from "Hooks/useDeleteCity";

type PropsType = {
  isOpen: boolean;
  closeModal: () => void;
  id: string;
};

export const DeleteCityModal = ({ closeModal, isOpen, id }: PropsType) => {
  const mutation = useDeleteCity();
  const navigate = useNavigate();

  const deleteCity = async () => {
    await mutation.mutateAsync(id);
    closeModal();
    navigate(`/${EPaths.CITY_DATA}`);
  };

  return (
    <Dialog
      open={isOpen}
      onClose={closeModal}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      id="delete-modal"
    >
      <DialogTitle id="alert-dialog-title">Usuń miasto</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description" sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <Typography component="span" variant="body1">
            Czy na pewno chcesz usunąć miasto? Ta operacja jest nieodwracalna.
          </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeModal}>Zamknij</Button>
        <Button variant="contained" onClick={deleteCity} id="delete-city-in-modal-btn">
          Usuń
        </Button>
      </DialogActions>
    </Dialog>
  );
};
