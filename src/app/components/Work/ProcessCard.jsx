"use client"
import React, { ReactNode } from 'react'

export const ProcessCard = ({id, icon, className, title, description }) => {
    return (
        <div className={`flex flex-col items-center justify-center rounded-3xl  bg-neutral-50  border  p-5 ${className}  z-30 max-w-screen-sm w-full`}>
            
            <div className=' flex items-center justify-center mb-3 p-4 text-orange-700 text-base font-semibold size-4 border-2 border-orange-700/35 rounded-full'>
                {id}
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-xl text-secondary font-bold mb-1 uppercase text-center'>{title}</h1>
                <p className='text-sm leading-normal text-neutral-700 tracking-wide text-center '>{description}</p>
            </div>
        </div>
    )
}
