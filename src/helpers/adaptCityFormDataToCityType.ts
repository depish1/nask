import { nanoid } from "nanoid";

import { CityFormDataType, CityType, VoivodeshipType } from "Types/cities.types";
import { splitStringToArray } from "Helpers/splitStringToArray";

export const adaptCityFormDataToCityType = (formData: CityFormDataType): CityType => ({
  ...formData,
  voivodeship: formData.voivodeship as VoivodeshipType,
  known_places: splitStringToArray(formData.known_places),
  links: splitStringToArray(formData.links),
  id: formData.id || nanoid(),
});
