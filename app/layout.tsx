'use client'

import { useState, useEffect } from "react"
import {Inter} from 'next/font/google'
import './globals.css'

const inter = Inter({subsets:['latin']})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarToggle, setSidebarToggle] = useState(false)
  const [totalEarnings, settotalEarnings] = useState(0)


  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
