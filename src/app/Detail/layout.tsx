import Navbar from '@/Components/Navbar'
import React from 'react'

export default function layout({children}) {
  return (
    <>
    <Navbar/>
    <div>
      {children}
    </div>
    </>
  )
}
