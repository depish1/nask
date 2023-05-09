import { Box } from "@mui/material";

import { AboutModal } from "Components/Modals/AboutModal";
import { ContactModal } from "Components/Modals/ContactModal";
import { HelpModal } from "Components/Modals/HelpModal";
import { SingleOption } from "Components/Header/SingleOption";

export const Options = () => (
  <Box sx={{ display: "flex" }}>
    <SingleOption
      id="about-btn"
      buttonText="O nas"
      renderModal={(isOpen: boolean, closeModal: () => void) => <AboutModal isOpen={isOpen} closeModal={closeModal} />}
    />
    <SingleOption
      id="help-btn"
      buttonText="Pomoc"
      renderModal={(isOpen: boolean, closeModal: () => void) => <HelpModal isOpen={isOpen} closeModal={closeModal} />}
    />
    <SingleOption
      id="contact-btn"
      buttonText="Kontakt"
      renderModal={(isOpen: boolean, closeModal: () => void) => (
        <ContactModal isOpen={isOpen} closeModal={closeModal} />
      )}
    />
  </Box>
);
