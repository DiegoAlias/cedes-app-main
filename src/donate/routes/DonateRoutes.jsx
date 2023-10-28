import { Route, Routes } from "react-router-dom";
import { DatabasePage } from "../pages";

export const DonateRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/database" element={<DatabasePage />} />
      </Routes>
    </>
  );
};
