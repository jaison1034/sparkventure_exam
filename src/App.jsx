import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistrationPage from "./pages/RegistartionForm";
import Home from "./pages/homepage";
import Login from "./pages/login";
import DataDisplay from "./pages/datadisplay";
import "./App.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element ={<Login />} />
        <Route path="/register" element={<RegistrationPage />} /> 
        <Route path="/data" element={<DataDisplay />} />
      </Routes>
    </Router>
  );
}

export default App;
