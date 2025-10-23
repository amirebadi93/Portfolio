import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import HomeEn from "../pages/en/Home";
import PortfolioEn from "../pages/en/Portfolio";
import HomeFa from "../pages/fa/Home";
import PortfolioFa from "../pages/fa/Portfolio";

function Router() {
  return (
    <div>
      <Routes>
        {/* Redirect root to English */}
        <Route path="/" element={<Navigate to="/en" replace />} />
        
        {/* English Routes */}
        <Route path="/en" element={<HomeEn />} />
        <Route path="/en/portfolio" element={<PortfolioEn />} />
        
        {/* Persian Routes */}
        <Route path="/fa" element={<HomeFa />} />
        <Route path="/fa/portfolio" element={<PortfolioFa />} />
      </Routes>
    </div>
  );
}

export default Router;