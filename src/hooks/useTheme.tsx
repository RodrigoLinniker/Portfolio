import {
  useContext,
  createContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface ProviderProps {
  children: ReactNode;
}

type ThemeName = "light" | "dark" | string;

type ThemeContextType = {
  theme: ThemeName;
  setTheme: (name: ThemeName) => void;
};

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

export default function ThemeContextProvider({ children }: ProviderProps) {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") !== "dark" ? "light" : "dark"
  );

  useEffect(() => {
    const root = window.document.documentElement;

    const removeOldTheme = theme === "dark" ? "light" : "dark";

    root.classList.remove(removeOldTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
