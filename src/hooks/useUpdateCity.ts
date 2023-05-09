import { useMutation, useQueryClient } from "react-query";

import { CityType } from "Types/cities.types";
import { updateCity } from "Api/cities";

export const useUpdateCity = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (city: CityType) => updateCity(city),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["cities"] }),
  });
};
