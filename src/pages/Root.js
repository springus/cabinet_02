import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import MainLayout from './MainLayout'

export default function Root() {
  return (
    <div>
      <Header/>
      <MainLayout>
        <Outlet/>
      </MainLayout>
      <Footer/>
    </div>
  )
}