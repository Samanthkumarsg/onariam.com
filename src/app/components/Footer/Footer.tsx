"use client"
import Link from 'next/link';
import React from 'react'
import { RxLinkedinLogo, RxInstagramLogo, RxGlobe } from "react-icons/rx";

const Footer: React.FC = () => {
  return (
    <div className='bg-secondary  w-full max-w-screen-lg rounded-t-2xl p-8 mx-auto flex flex-row items-center justify-between pb-10 '>
      <div className='flex items-start justify-center flex-col '>
        <h1 className='text-2xl font-semibold text-white font-moderno'>Onariam</h1>
        <h1 className='text-sm font-light text-white'>Creating Digital Ecosystem </h1>
        <h1 className='mt-2 text-xs font-light text-white'>© 2025, Onariam </h1>
      </div>
      <div className=' flex flex-row items-center justify-center gap-4 '>
        <Link href="https://www.linkedin.com/company/weareonariam/" target="_blank" rel="noopener noreferrer">
          <RxLinkedinLogo className='text-white size-6' />
        </Link>
        <Link href="https://www.linkedin.com/company/weareonariam/" target="_blank" rel="noopener noreferrer">
          <RxInstagramLogo className='text-white size-6' />
        </Link>
        <Link href="https://www.linkedin.com/company/weareonariam/" target="_blank" rel="noopener noreferrer">
          <RxGlobe className='text-white size-6' />
        </Link>
      </div>
    </div>
  )
}


export default Footer;