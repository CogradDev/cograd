import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
// import Carousel from './components/Carousel';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services/>} />
          <Route path="/contact-us" element={<ContactUs/>} />
       {/* <Route path="/carousel" element={<Carousel />} />  */}
       {/* <Route path='/carousel' element={<Carousel />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
