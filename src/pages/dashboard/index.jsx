import React from 'react'
import construction from '../../assets/images/construction.png'
import { MdConstruction } from "react-icons/md";

const Dashboard = () => {
  return (
    <>
    <h2 className='font-bold text-blue-900 text-2xl'>Dashboard</h2>
    <div className='h-full flex flex-col justify-center align-middle items-center'>
      <h1 className='text-5xl font-bold text-gray-800'>All pages under construction</h1>
      {/* <MdConstruction size={200} className='text-gray-800'/> */}
      <img src={construction} alt="" />
    </div>
    </>
  )
}

export default Dashboard