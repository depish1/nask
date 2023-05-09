import { useMutation, useQueryClient } from "react-query";

import { deleteCityById } from "Api/cities";

export const useDeleteCity = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteCityById(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["cities"] }),
  });
};
