"use client"

import type React from "react"

import { Suspense, type ReactNode } from "react"

interface ClientSuspenseProps {
  children: ReactNode
  fallback?: ReactNode
}

export function ClientSuspense({ children, fallback }: ClientSuspenseProps) {
  return <Suspense fallback={fallback || <div className="min-h-[20px]"></div>}>{children}</Suspense>
}

// HOC (Higher Order Component) version for wrapping client components
export function withClientSuspense<P extends object>(Component: React.ComponentType<P>, fallback?: ReactNode) {
  return function WithClientSuspense(props: P) {
    return (
      <Suspense fallback={fallback || <div className="min-h-[20px]"></div>}>
        <Component {...props} />
      </Suspense>
    )
  }
}
