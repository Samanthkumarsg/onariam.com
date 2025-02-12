"use client"
import React, { useEffect } from 'react'
import { gsap } from 'gsap';
import Link from 'next/link';


export const Header = () => {


    useEffect(() => {
        gsap.from(".header", {
            opacity: 0,
            y: -50,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.1,
            delay: 1,
        });

    }, []);



    return (
        <div className='w-full fixed bottom-0 sm:bottom-0 md:top-0 lg:top-0 xl:top-0 p-6 h-fit z-10'>
            <div className='header mt-1  max-w-screen-lg mx-auto border p-4 flex flex-row items-center justify-between rounded-3xl bg-white  z-50'>
                <div className='bg-white '>
                    <h1 className='text-xl font-moderno text-orange-700 font-medium'>Onariam</h1>
                </div>
                <div className='*:text-neutral-500 *:font-medium cursor-pointer hover:text-neutral-900 uppercase *:text-xs gap-6 tracking-wider hidden sm:hidden md:flex md:flex-row lg:flex lg:flex-row xl:flex xl:flex-row bg-white'>
                    <h1 className='hover:text-neutral-900 hover:font-medium '>Our Work</h1>
                    <h1 className='hover:text-neutral-900 hover:font-medium '>Our Services</h1>
                    {/* <h1 className='hover:text-neutral-900 hover:font-medium '>testimonials</h1> */}
                    <h1 className='hover:text-neutral-900 hover:font-medium '>Pricing</h1>
                    <h1 className='hover:text-neutral-900 hover:font-medium '>Faq's</h1>
                </div>
                <div className='bg-white '>
                    <Link href="https://cal.com/onariam" target="_blank" rel="noopener noreferrer">

                        <button className='text-xs rounded-xl py-2.5 px-5 bg-orange-700 text-white uppercase'>let’s discuss</button>
                    </Link>

                </div>
            </div>
        </div>
    )
}
