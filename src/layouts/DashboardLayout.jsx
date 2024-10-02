import React from 'react'
import { Outlet } from 'react-router-dom'
import SideNav from '../components/SideNav'

const DashboardLayout = () => {
  return (
    <div>
        <SideNav />
        <Outlet />
    </div>
  )
}

export default DashboardLayout