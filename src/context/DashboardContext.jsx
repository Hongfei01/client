import { useContext } from 'react';
import { createContext, useState } from 'react';

import { checkDarkTheme } from '../hooks/checkDarkMode';

const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const user = { name: 'Jim' };
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(checkDarkTheme());

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle('dark-theme', isDarkTheme);

    localStorage.setItem('dark-theme', newDarkTheme);
  };

  const toggleSidebar = () => {
    setShowSidebar((show) => !show);
  };

  const logoutUser = async () => {
    console.log('logout user');
  };
  return (
    <DashboardContext.Provider
      value={{
        user,
        showSidebar,
        isDarkTheme,
        toggleDarkTheme,
        toggleSidebar,
        logoutUser,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (context === undefined)
    throw new Error('Context was used outside the Provider');
  return context;
};
