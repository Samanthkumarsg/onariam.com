"use client"
import React from 'react'

export const CommonLayout = ({ title, text, children }) => {
  return (
    <div className='py-32 p-6 flex flex-col mb-2 items-center justify-center tracking-wide '>
      <h1 className='uppercase font-semibold text-2xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-4xl text mb-2 text-secondary'>{text}</h1>
      <h1 className='uppercase font-semibold text-2xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-4xl text-orange-700'>{title}</h1>

      <div className='max-w-screen-lg flex items-center justify-center mt-12'>
        {children}
      </div>
    </div>
  )
}
