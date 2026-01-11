import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("../pages/home"));

const AppRoutes = () => {
  return (
    <Router>
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Add more routes here as needed */}
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
