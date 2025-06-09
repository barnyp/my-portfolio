"use client";

import { ReactNode, useEffect, useState } from "react";

interface HydrationGuardProps {
  children: ReactNode;
}

export default function HydrationGuard({ children }: HydrationGuardProps) {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Suppress hydration warnings for browser extensions
    const originalConsoleError = console.error;
    console.error = (...args: any[]) => {
      const message = args[0];
      if (
        typeof message === 'string' &&
        (message.includes('hydration') || 
         message.includes('cz-shortcut-listen') ||
         message.includes('server rendered HTML'))
      ) {
        // Suppress hydration warnings related to browser extensions
        return;
      }
      originalConsoleError.apply(console, args);
    };

    setIsHydrated(true);

    return () => {
      console.error = originalConsoleError;
    };
  }, []);

  // During SSR and initial hydration, render a consistent state
  if (!isHydrated) {
    return (
      <div suppressHydrationWarning={true}>
        {children}
      </div>
    );
  }

  return <>{children}</>;
} 