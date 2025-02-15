"use client"
import React, { ReactNode } from 'react'

export const ProcessCard = ({ icon, className, title, description }) => {
    return (
        <div className={`flex flex-col items-center justify-center rounded-3xl  bg-neutral-50  border  p-5 ${className}  z-30 max-w-screen-sm w-full`}>
            <div className=' flex items-start justify-start  mb-4'>
                {icon}
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-xl text-secondary font-bold mb-2 uppercase text-center'>{title}</h1>
                <p className='text-sm leading-normal text-neutral-700 tracking-wide text-center '>{description}</p>
            </div>
        </div>
    )
}
