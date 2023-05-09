import { useMutation, useQueryClient } from "react-query";

import { CityType } from "Types/cities.types";
import { addCity } from "Api/cities";

export const useAddCity = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (city: CityType) => addCity(city),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["cities"] }),
  });
};
