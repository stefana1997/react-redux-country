import { createContext, useState, useContext } from "react";

const DrawerContext = createContext();

const DrawerContextProvider = ({ children }) => {
  const [isOpened, toggleIsOpened] = useState(false);

  return (
    <DrawerContext.Provider value={{ isOpened, toggleIsOpened }}>
      {children}
    </DrawerContext.Provider>
  );
};

const useDrawerContext = () => {
  const context = useContext(DrawerContext);
  if (context === undefined) {
    throw new Error(
      "useDrawerContext must be used within a DrawerContextProvider"
    );
  }
  return context;
};

export { DrawerContextProvider, useDrawerContext };