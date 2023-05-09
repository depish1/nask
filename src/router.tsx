import { Route, Navigate, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import { CityDataPage } from "Pages/CityDataPage";
import { CityFormPage } from "Pages/CityFormPage";
import { EPaths } from "Enums/EPaths";
import { Layout } from "Components/Layout";
import { SuspensePage } from "Pages/SuspensePage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route element={<Navigate to={`/${EPaths.CITY_DATA}`} />} path="/" />
      <Route element={<SuspensePage page={<CityDataPage />} />} path={`/${EPaths.CITY_DATA}`} />
      <Route element={<SuspensePage page={<CityFormPage />} />} path={`/${EPaths.CITY_FORM}`} />
    </Route>
  )
);
