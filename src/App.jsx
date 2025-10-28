import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Index from "./Components/Pages/Index";
import Footer from "./Components/Footer/Footer";
import Properties from "./Components/Pages/Properties";
import PropertiesDetails from "./Components/Pages/PropertiesDetails";
import Agents from "./Components/Pages/Agents";
import Agencies from "./Components/Pages/Agencies";
import Gallery from "./Components/Pages/Gallery";
import Contact from "./Components/Pages/Contact";

const App = () => {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Index />}/>
          <Route path='/properties' element={<Properties />}/>
          <Route path='/property/:id' element={<PropertiesDetails />}/>
          <Route path='/agents' element={<Agents />}/>
          <Route path='/agencies' element={<Agencies />}/>
          <Route path='/gallery' element={<Gallery />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>        
        <Footer />
      </Router>
    </>
  );
};

export default App;
