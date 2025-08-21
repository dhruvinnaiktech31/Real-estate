import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Listings from "./pages/Listings";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import PropertyDetail from "./pages/PropertyDetail";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/listings" element={<Listings/>}/>
         <Route path="/property/:id" element={<PropertyDetail />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/notfound" element={<NotFound/>}/>
      </Routes>
      
      
      
      
      
      <Footer />
    </>
  );
}

export default App;
