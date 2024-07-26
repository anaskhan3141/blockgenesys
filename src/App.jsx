import React, { useRef, useContext, createContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"
import { ThemeProvider, useTheme } from "./Components/ThemeProvider";
import { Element } from 'react-scroll';
import Navbar from "./Components/Navbar2/Navbar";
import Main from "./Components/Main/Main";
import OurProcess from "./Components/OurProcess/OurProcess";
import Page from './Components/Pages/Page'
import Page1 from "./Components/Pages/Page1"
import Page2 from "./Components/Pages/Page2"
import Page3 from "./Components/Pages/Page3"
import OurClients from "./Components/OurClients/OurClients"
import Footer from "./Components/Footer2/Footer"
import ScrollProvider from "./Components/ScrollProvider";
import Projects from "./Components/Projects/Projects";
import Index from "./Pages/index"
import Contact from "./Pages/Contact";

const App = () => {

  const { theme } = useTheme();

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Router>
   

  )

}

export default App;