'use client'

import './globals.css'  
import {Providers} from "./providers";
import { useState, useEffect } from "react"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarToggle, setSidebarToggle] = useState(false)
  const [totalEarnings, settotalEarnings] = useState(0)


  return (
    <html lang="en">
      <body className='quicksand'>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
