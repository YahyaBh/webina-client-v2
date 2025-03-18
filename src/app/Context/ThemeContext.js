// "use client";
// import Cookies from "js-cookie";
// import React, { createContext, useEffect, useState, useCallback } from "react";

// export const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {

//     const [isDarkMode, setIsDarkMode] = useState(true);

//     useEffect(() => {
//         const savedThemeMode = Cookies.get("__THEME_MODE");

//         if (savedThemeMode) {
//             setIsDarkMode(JSON.parse(savedThemeMode));
//         }
//     }, [])

//     const toggleTheme = useCallback(() => {
//         Cookies.set("__THEME_MODE", !isDarkMode, { sameSite: 'Lax', expires: 365 });
//         setIsDarkMode((prevMode) => !prevMode);
//     }, []);



//     // useEffect(() => {
//     //     const themeVariables = {
//     //         "--settings-color": isDarkMode ? "#131313" : "#FFFFFF",
//     //         "--light-color-primary": isDarkMode ? "#FFE662" : "#FFF",
//     //         "--primary-color-dark": isDarkMode ? "#1E1E1E" : "#FFE662",
//     //         "--primary-color-grey": isDarkMode ? "#3C3C3C" : "#FFFFFF",
//     //         "--dark-color-primary": isDarkMode ? "#FFE662" : "#1E1E1E",
//     //         "--blog-card": isDarkMode ? "#3C3C3C" : "#F1E7B1",
//     //         "--light-color": isDarkMode ? "#1e1e1e" : "#fff",
//     //         "--black-color": isDarkMode ? "#fff" : "#1e1e1e",
//     //         "--secondary-color": isDarkMode ? "#1e1e1e" : "#fff",
//     //         "--cards-color": isDarkMode ? "#F9EA9B" : "#131313",
//     //         "--ecd-to-black": isDarkMode ? "#fff" : "#F9EA9B",
//     //         "--ecd-to-grey": isDarkMode ? "#3d3d3d" : "#ECD777",
//     //         "--primary-to-grey": isDarkMode ? "#3d3d3d" : "#FFE662",
//     //         "--golry-to-black": isDarkMode ? "#1e1e1e" : "#3A3832",
//     //     };

//     //     for (const [key, value] of Object.entries(themeVariables)) {
//     //         document?.documentElement.style.setProperty(key, value);
//     //     }

//     //     document?.documentElement.style.setProperty("transition", "all 0.3s ease");
//     // }, [isDarkMode]);


//     return (
//         <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
//             {children}
//         </ThemeContext.Provider>
//     );
// };
