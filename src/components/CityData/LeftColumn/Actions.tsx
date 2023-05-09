import { Box, IconButton } from "@mui/material";

import { DeleteCityModal } from "Components/Modals/DeleteCityModal";
import { EPaths } from "Enums/EPaths";
import { PencilIcon } from "Icons/PencilIcon";
import { TrashIcon } from "Icons/TrashIcon";
import { useCityDataContext } from "Contexts/CityDataContext";
import { useModal } from "Hooks/useModal";
import { useNavigateParams } from "Hooks/useNavigateParams";

export const Actions = () => {
  const navigateWithParams = useNavigateParams();
  const data = useCityDataContext();
  const [isModalOpen, openModal, closeModal] = useModal();

  const navigateToEditForm = () => navigateWithParams(`/${EPaths.CITY_FORM}`, { id: `${data?.id}` });

  return (
    <Box>
      <IconButton onClick={navigateToEditForm} id="edit-city-btn">
        <PencilIcon sx={{ height: "16px", width: "16px" }} />
      </IconButton>
      <IconButton onClick={openModal} id="delete-city-btn">
        <TrashIcon sx={{ height: "16px", width: "16px" }} />
      </IconButton>
      <DeleteCityModal isOpen={isModalOpen} closeModal={closeModal} id={data?.id} />
    </Box>
  );
};
