import { useSearchParams } from "react-router-dom";

export const useIdFromParams = () => {
  const [params] = useSearchParams();
  const id = params.get("id");

  return id;
};
