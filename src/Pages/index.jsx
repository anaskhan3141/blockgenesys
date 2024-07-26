import React, { useRef, useContext, createContext, useEffect } from "react";
import { ThemeProvider, useTheme } from "../Components/ThemeProvider";
import { Element } from 'react-scroll';
import Navbar from "../Components/Navbar2/Navbar";
import Main from "../Components/Main/Main";
import OurProcess from "../Components/OurProcess/OurProcess";
import Page from '../Components/Pages/Page'
import Page1 from "../Components/Pages/Page1"
import Page2 from "../Components/Pages/Page2"
import Page3 from "../Components/Pages/Page3"
import OurClients from "../Components/OurClients/OurClients"
import Footer from "../Components/Footer2/Footer"
import ScrollProvider from "../Components/ScrollProvider";
import Projects from "../Components/Projects/Projects";

export default function index() {
    return (
        <>
            <Navbar />
            <Main />
            <Page />
            {/* <ScrollProvider>
        {(nextComponentRef) => (
          <div>
            <OurProcess />
            <Page1 ref={nextComponentRef} />
          </div>
        )}
      </ScrollProvider> */}
            <OurProcess />
            <Element name="page1">
                <Page1 />
            </Element>

            <Page2 />
            <Page3 />

            <Element name="services">
                <OurClients />
            </Element>

            <Element name="portfolio">

                <Projects />
            </Element>
            <Footer />
        </>
    )
}
