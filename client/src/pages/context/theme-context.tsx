import { createContext } from "react";
interface ThemeContextModel {
  themeMode: string;
  setThemeMode?: React.Dispatch<React.SetStateAction<string>>;
}
const createThemeContextModel = (): ThemeContextModel => {
  return {
    themeMode: "",
  };
};
export const ThemeContext = createContext(createThemeContextModel());
