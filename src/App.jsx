import React, { useRef, useContext, createContext, useEffect } from "react";
import "./App.css"
import { ThemeProvider, useTheme } from "./Components/ThemeProvider";
import Navbar from "./Components/Navbar2/Navbar";
import Main from "./Components/Main/Main";
import OurProcess from "./Components/OurProcess/OurProcess";
import Page0 from "./Components/Pages/Page0"
import Page1 from "./Components/Pages/Page1"
import Page2 from "./Components/Pages/Page2"
import Page3 from "./Components/Pages/Page3"
import OurClients from "./Components/OurClients/OurClients"
import Footer from "./Components/Footer2/Footer"
import ScrollProvider from "./Components/ScrollProvider";

const App = () => {

  const { theme } = useTheme();

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

  return (
      <div className="app">
        <Navbar />
        <Main />
        <Page0 />

        <ScrollProvider>
          {(nextComponentRef) => (
            <div>
              <OurProcess />
              <Page1 ref={nextComponentRef} />
            </div>
          )}
        </ScrollProvider>

        <Page2 />
        <Page3 />
        <OurClients />

        <Footer />

      </div>

  )

}

export default App;