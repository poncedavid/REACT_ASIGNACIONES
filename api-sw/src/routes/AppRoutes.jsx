import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, PersonPage } from "../pages";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<PersonPage />} />
      </Routes>
    </BrowserRouter>
  );
};
