import { CityType } from "Types/cities.types";
import { apiUrl } from "src/config";

export const getCities = async (): Promise<CityType[]> => {
  const url = `${apiUrl}/cities`;
  const resp = await fetch(url);

  return await resp.json();
};

export const deleteCityById = async (id: string): Promise<void> => {
  const url = `${apiUrl}/cities/${id}`;
  const resp = await fetch(url, { method: "DELETE" });
  const data = await resp.json();

  return data;
};

export const addCity = async (city: CityType): Promise<void> => {
  const url = `${apiUrl}/cities`;
  const resp = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(city),
  });
  const data = await resp.json();

  return data;
};

export const updateCity = async (city: CityType): Promise<void> => {
  const url = `${apiUrl}/cities/${city.id}`;
  const resp = await fetch(url, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(city),
  });
  const data = await resp.json();

  return data;
};
