import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingApp from "./app/App.tsx";
import DashboardApp from "./App.jsx";
import "./styles/index.css";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingApp />} />
        <Route path="/login" element={<DashboardApp />} />
        <Route path="/dashboard" element={<DashboardApp />} />
        <Route path="/customer" element={<DashboardApp />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);