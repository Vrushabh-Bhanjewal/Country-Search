import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../UI/Header'
import Footer from '../UI/Footer'

function AppLayout() {
  return (
    <div>
        <Header />
        <Outlet />
        <Footer/>
    </div>
  )
}

export default AppLayout