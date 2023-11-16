import { Route, Routes } from "react-router-dom";
import { DatabasePage } from "../pages";
import { ThanksPage } from "../pages/ThanksPage";

export const DonateRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/database" element={<DatabasePage />} />
        <Route path="/thanks" element={<ThanksPage />} />
      </Routes>
    </>
  );
};
