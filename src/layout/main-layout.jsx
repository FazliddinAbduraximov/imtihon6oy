import React from 'react'
import { Header } from './header/header'
import { Outlet } from 'react-router-dom'
import { Footer } from './footer/footer'

export const MainLayout = () => {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}
