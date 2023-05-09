import { Button } from "@mui/material";
import { ReactNode } from "react";

import { useModal } from "Hooks/useModal";

type PropsType = {
  renderModal: (isOpen: boolean, closeModal: () => void) => ReactNode;
  buttonText: string;
  id?: string;
};

export const SingleOption = ({ buttonText, renderModal, id }: PropsType) => {
  const [isModalOpen, openModal, closeModal] = useModal();

  return (
    <>
      <Button
        id={id}
        onClick={openModal}
        sx={{ fontSize: "12px", lineHeight: "24px", padding: "0 8px", minWidth: 0, textTransform: "none" }}
      >
        {buttonText}
      </Button>
      {renderModal(isModalOpen, closeModal)}
    </>
  );
};
