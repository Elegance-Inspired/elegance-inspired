import { Suspense } from "react"
import NavbarClient from "./navbar-client"

export default function Navbar() {
  return (
    <Suspense fallback={<div className="h-20"></div>}>
      <NavbarClient />
    </Suspense>
  )
}
