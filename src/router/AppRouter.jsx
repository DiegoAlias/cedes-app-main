import { Route, Routes } from "react-router-dom";
import { LoginPages } from "../auth";
import { DonatePage, DonateRoutes } from "../donate";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DonatePage />} />
        <Route path="/login" element={<LoginPages />} />
        <Route path="*" element={<DonateRoutes />} />
      </Routes>
    </>
  );
};
