"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false);

  // Ensure we're mounted before rendering theme-specific content
  useEffect(() => {
    setMounted(true);
  }, []);

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

// Create a context to track mounted state
export const MountedContext = createContext(false);

export function useMounted() {
  return useContext(MountedContext);
}

// Wrapper component that only renders children when mounted
export function MountedProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <MountedContext.Provider value={mounted}>
      {children}
    </MountedContext.Provider>
  );
}
