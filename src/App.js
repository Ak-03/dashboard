import Dashboard from "./components/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
