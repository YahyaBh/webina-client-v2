"use client";
import Cookies from "js-cookie";
import React, { createContext, useEffect, useState, useCallback, useLayoutEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedThemeMode = Cookies.get("__THEME_MODE");
        return savedThemeMode === "true";
    });

    const toggleTheme = useCallback(() => {
        setIsDarkMode((prevMode) => !prevMode);
    }, []);



    useEffect(() => {
        const setTheme = (darkMode) => {

            document.documentElement.style.setProperty(
                "--settings-color",
                darkMode ? "#131313" : "#FFFFFF"
            );
            document.documentElement.style.setProperty(
                "--light-color-primary",
                darkMode ? "#FFE662" : "#FFF"
            );
            document.documentElement.style.setProperty(
                "--primary-color-dark",
                darkMode ? "#1E1E1E" : "#FFE662"
            );
            document.documentElement.style.setProperty(
                "--primary-color-grey",
                darkMode ? "#3C3C3C" : "#FFFFFF"
            );
            document.documentElement.style.setProperty(
                "--dark-color-primary",
                darkMode ? "#FFE662" : "#1E1E1E"
            );
            document.documentElement.style.setProperty(
                "--blog-card",
                darkMode ? "#3C3C3C" : "#F1E7B1"
            );
            document.documentElement.style.setProperty(
                "--light-color",
                darkMode ? "#1e1e1e" : "#fff"
            );
            document.documentElement.style.setProperty(
                "--black-color",
                darkMode ? "#fff" : "#1e1e1e"
            );
            document.documentElement.style.setProperty(
                "--secondary-color",
                darkMode ? "#1e1e1e" : "#fff"
            );
            document.documentElement.style.setProperty(
                "--cards-color",
                darkMode ? "#F9EA9B" : "#131313"
            );
            document.documentElement.style.setProperty(
                "--ecd-to-black",
                darkMode ? "#fff" : "#F9EA9B"
            )

            document.documentElement.style.setProperty(
                "--ecd-to-grey",
                darkMode ? "#3d3d3d" : "#ECD777"
            )
            document.documentElement.style.setProperty(
                "--primary-to-grey",
                darkMode ? "#3d3d3d" : "#FFE662"
            )
            document.documentElement.style.setProperty(
                "--golry-to-black",
                darkMode ? "#1e1e1e" : "#3A3832"
            )
            Cookies.set("__THEME_MODE", darkMode, { sameSite: 'Lax', expires: 365 }); // Expires in 1 year

        };

        setTheme(isDarkMode);

        document.documentElement.style.setProperty("transition", "all 8s ease");

        const transitionTimeout = setTimeout(() => {
            document.documentElement.style.setProperty("transition", "");
        }, 8000);

        return () => clearTimeout(transitionTimeout);
    }, [isDarkMode]);

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
