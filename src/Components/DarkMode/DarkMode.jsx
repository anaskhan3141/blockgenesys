import React from "react";
import  Sun  from "./Sun.svg";
import  Moon from "./Moon.svg";
import "./DarkMode.css";

const DarkMode = () => {
    const setDarkMode= ()=>{
        document.querySelector('body').setAttribute('data-theme',   'dark')
    }
    const setLightMode= ()=>{
        document.querySelector('body').setAttribute('data-theme',   'light')
    }
    setDarkMode()
    const toggleTheme = (e)=>{

        if(e.target.checked){
            setDarkMode()
        }else{
            setLightMode()
        }

    }
    return (
        <div className='dark_mode'>
            <input 
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
                <img src={Sun} alt="" srcset="" />
                <img src={Moon} alt="" srcset="" />
                {/* <Sun />
                <Moon /> */}
            </label>
        </div>
    );
};

export default DarkMode;
