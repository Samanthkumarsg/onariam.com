"use client"
import React, { ReactNode } from 'react'


export const Card = ({ icon, className, hasChildrenPills, title, description }) => {
    return (
        <div className={`flex flex-col items-start justify-start rounded-3xl  bg-neutral-50  border  p-7 ${className}`}>
            <div className='mb-2 flex items-start justify-start'>
                {icon}
            </div>
            <div className='flex flex-col mt-2'>
                <h1 className='text-lg text-secondary font-semibold mb-1 uppercase'>{title}</h1>
                <p className='text-sm leading-normal text-neutral-700 tracking-wide '>{description}</p>
            </div>
            {hasChildrenPills && (<div className='mt-7 flex flex-col items-start justify-start gap-4 w-full *:w-full *:bg-white *:text-neutral-500 font-medium *:tracking-wider *:p-2 *:text-sm *:rounded-lg *:border '>
                <div className=''>User Research & Strategy</div>
                <div className=''>Wireframing & Prototyping</div>
                <div className=''>UI Design & Style Guides</div>
                <div className=''>Responsive & Accessible Design</div>
                <div className=''>UX Testing & Optimization</div>

            </div>)}
        </div>
    )
}
