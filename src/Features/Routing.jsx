import React from "react";
import { Route, Routes } from "react-router-dom";
import { CheckoutPage } from "../Pages/CheckoutPage";
// import CheckoutPage from '../Pages/CheckoutPage';

// export default
export function Routing() {
  return (
    <Routes>
      <Route path="/" element={<CheckoutPage />} />
    </Routes>
  );
}
