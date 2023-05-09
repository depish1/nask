import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { zodResolver } from "@hookform/resolvers/zod";

import { CityFormDataType } from "Types/cities.types";
import { EPaths } from "Enums/EPaths";
import { adaptCityFormDataToCityType } from "Helpers/adaptCityFormDataToCityType";
import { cityFormSchema } from "Schemas/CityForm.schema";
import { useAddCity } from "Hooks/useAddCity";
import { useCityFormDefaultValues } from "Hooks/useCityFormDefaultValues";
import { useUpdateCity } from "Hooks/useUpdateCity";

export const useCityForm = () => {
  const { defaultValues, isEditMode } = useCityFormDefaultValues();
  const navigate = useNavigate();
  const methods = useForm({ defaultValues, resolver: zodResolver(cityFormSchema) });
  const addMutation = useAddCity();
  const updateMutation = useUpdateCity();

  useEffect(() => {
    methods.reset(defaultValues);
  }, [defaultValues, methods]);

  const onSubmit = useCallback(
    async (formData: CityFormDataType) => {
      const adaptedData = adaptCityFormDataToCityType(formData);
      await (isEditMode ? updateMutation.mutateAsync(adaptedData) : addMutation.mutateAsync(adaptedData));
      navigate(`/${EPaths.CITY_DATA}`);
    },
    [addMutation, isEditMode, navigate, updateMutation]
  );

  return { methods, onSubmit, isEditMode };
};
