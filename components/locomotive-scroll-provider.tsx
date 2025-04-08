"use client"

import { type ReactNode, useEffect, useRef } from "react"
import { usePathname } from "next/navigation"

interface LocomotiveScrollProviderProps {
  children: ReactNode
}

export function LocomotiveScrollProvider({ children }: LocomotiveScrollProviderProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    const initLocomotiveScroll = async () => {
      try {
        const LocomotiveScroll = (await import("locomotive-scroll")).default
        const scroll = new LocomotiveScroll({
          el: containerRef.current!,
          smooth: true,
          smartphone: { smooth: true },
          tablet: { smooth: true },
        })

        // Handle animations on scroll
        const handleScroll = () => {
          const animatedElements = document.querySelectorAll(".animate-on-scroll")
          animatedElements.forEach((element) => {
            const rect = element.getBoundingClientRect()
            const isVisible = rect.top <= window.innerHeight * 0.8

            if (isVisible) {
              element.classList.add("is-visible")
            }
          })
        }

        // Initial check for elements in view
        setTimeout(handleScroll, 200)

        // Add scroll event listener
        window.addEventListener("scroll", handleScroll)

        return () => {
          scroll.destroy()
          window.removeEventListener("scroll", handleScroll)
        }
      } catch (error) {
        console.error("Failed to initialize Locomotive Scroll:", error)
      }
    }

    initLocomotiveScroll()
  }, [pathname])

  return (
    <div ref={containerRef} data-scroll-container>
      {children}
    </div>
  )
}
