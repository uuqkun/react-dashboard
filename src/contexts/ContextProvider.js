import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState("#03C9D7");
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false);

    function setMode(event) {
        setCurrentMode(event.target.value);

        localStorage.setItem('themeMode', event.target.value);
        setThemeSettings(false);
    }

    function setColor(color) {
        setCurrentColor(color);

        localStorage.setItem('colorMode', color);
        setThemeSettings(false);
    }

    const handleClick = clicked => {
        setIsClicked({ ...initialState, [clicked]: true });
    }

    return (
        <StateContext.Provider
            value={{
                activeMenu,
                setActiveMenu,
                isClicked,
                setIsClicked,
                handleClick,
                screenSize,
                setScreenSize,
                setColor, setMode,
                currentColor, setCurrentColor,
                currentMode, setCurrentMode,
                themeSettings, setThemeSettings,
            }}
        >
            {children}
        </StateContext.Provider>

    );
}
export const useStateContext = () => useContext(StateContext); 