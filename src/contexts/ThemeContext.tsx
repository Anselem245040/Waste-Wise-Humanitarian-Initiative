import React, { createContext } from "react";

export const ThemeContext = createContext({ theme: "light" });

export function ThemeProvider({
  children,
  defaultTheme,
}: {
  children: React.ReactNode;
  defaultTheme?: string;
}) {
  return (
    <ThemeContext.Provider value={{ theme: defaultTheme || "light" }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
