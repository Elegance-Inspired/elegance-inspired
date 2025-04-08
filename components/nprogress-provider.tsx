"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import NProgress from "nprogress";
import { Suspense } from "react";

export function NProgressProviderClient() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  // Configure NProgress based on network conditions
  const configureNProgressForNetwork = () => {
    // Use the Network Information API if available to adjust progress speed
    if ("connection" in navigator && navigator.connection) {
      const connection = navigator.connection as any;
      const effectiveType = connection.effectiveType || "4g";

      // Adjust trickle speed based on connection type
      switch (effectiveType) {
        case "slow-2g":
        case "2g":
          NProgress.configure({ trickleSpeed: 400 });
          break;
        case "3g":
          NProgress.configure({ trickleSpeed: 300 });
          break;
        case "4g":
        default:
          NProgress.configure({ trickleSpeed: 200 });
          break;
      }
    }
  };

  // Initialize NProgress on mount
  useEffect(() => {
    // Configure NProgress
    NProgress.configure({
      minimum: 0.1,
      showSpinner: false,
      trickleSpeed: 200,
      easing: "ease",
      speed: 500,
    });

    // Add click event listener for navigation links
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a") as HTMLAnchorElement;

      // Check if it's an internal navigation link
      if (
        link &&
        link.href &&
        link.href.startsWith(window.location.origin) &&
        !link.target &&
        !link.download &&
        !link.rel?.includes("external") &&
        !e.ctrlKey &&
        !e.metaKey &&
        !e.shiftKey
      ) {
        // Start progress when link is clicked
        configureNProgressForNetwork();
        NProgress.start();
      }
    };

    // Add click event listener for buttons that trigger navigation
    const handleButtonClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const button = target.closest("button") as HTMLButtonElement;

      // Check if it has a data attribute indicating it will navigate
      if (button && button.dataset.navigate) {
        configureNProgressForNetwork();
        NProgress.start();
      }
    };

    document.addEventListener("click", handleLinkClick);
    document.addEventListener("click", handleButtonClick);

    return () => {
      document.removeEventListener("click", handleLinkClick);
      document.removeEventListener("click", handleButtonClick);
      NProgress.done();
    };
  }, []);

  // Handle route changes
  useEffect(() => {
    // Start progress on route change
    configureNProgressForNetwork();
    NProgress.start();

    // Complete the progress bar
    const timer = setTimeout(() => {
      NProgress.done();
    }, 500);

    return () => {
      clearTimeout(timer);
      NProgress.done();
    };
  }, [pathname, searchParams]);

  return null;
}

export function NProgressProvider() {
  return (
    <Suspense fallback={null}>
      <NProgressProviderClient />
    </Suspense>
  );
}
