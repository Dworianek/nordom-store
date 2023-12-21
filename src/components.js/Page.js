import React from "react";

import { Routes, Route } from "react-router-dom";

import HomePage from "./HomePage";
import Stock from "./Stock";
import ErrorPage from "./ErrorPage";
import Documents from "./Documents";

export default function Page() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}
