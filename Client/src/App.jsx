// Package Imports
import { Route, Routes, Link } from "react-router-dom"
import Register from './pages/Register';

// Import Style
import "./App.css"


// Import Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"


// Import Pages
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
          <Route path="/" element={<Register />} />
          <Route path="/tracker" element={<Tracker />} />
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
