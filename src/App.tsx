import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Redirect from "./components/utils/Redirect";
import AnalyticsDashboard from "./pages/AnalyticsDashboard";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/analytics-dashboard" element={<AnalyticsDashboard />} />

          <Route path="/" element={<Redirect to="/analytics-dashboard" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
