import { useCallback, useState } from "react";

export const useModal = (initialState = false) => {
  const [isModalOpen, setIsModalOpen] = useState(initialState);

  const closeModal = useCallback(() => setIsModalOpen(false), []);

  const openModal = useCallback(() => setIsModalOpen(true), []);

  return [isModalOpen, openModal, closeModal, setIsModalOpen] as const;
};
