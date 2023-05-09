import { CityFormDataType, CityType, VoivodeshipType } from "Types/cities.types";

export const adaptCityTypeToCityFormData = (city: CityType): CityFormDataType => ({
  ...city,
  voivodeship: city.voivodeship.toLowerCase().trim() as VoivodeshipType,
  known_places: city.known_places.join(", "),
  links: city.links.join(", "),
});
