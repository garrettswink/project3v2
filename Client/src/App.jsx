// Package Imports
import { Route, Routes, Link } from "react-router-dom"


// Import Style
import "./App.css"


// Import Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"


// Import Pages
import Login from "./pages/Login"; 
import Tracker from "./pages/Tracker";
import Transactions from "./pages/Transactions";

function App() {
  
  return (
  
  <>
      {/* Components */}
      <Navbar />


      <Footer />
      
      {/* Routes */}
      <div className="container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/tracker" element={<Tracker />} />
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
