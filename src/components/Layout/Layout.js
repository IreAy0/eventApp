import React from 'react'
import Header from '../Header/Header'

export default function Layout({children, headerText, showButton}) {
  return (
    <>
    <Header  />
    <main>
      {children}
    </main>
    </>
  )
}
