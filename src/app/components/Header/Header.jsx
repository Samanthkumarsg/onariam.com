"use client";
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';

export const Header = ({ lenis }) => {
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

    const handleScroll = (e, targetId) => {
        e.preventDefault();
        if (lenis?.current) {
            lenis.current.scrollTo(targetId, {
                duration: 1.2,
                easing: (t) => 1 - Math.pow(1 - t, 3), // Ease-out effect
            });
        }
    };

    return (
        <div className='w-full fixed top-0 sm:top-0 md:top-0 lg:top-0 xl:top-0  h-fit z-10'>
            <div className='header mt-0 max-w-screen-lg mx-auto  p-3 flex flex-row items-center justify-between rounded-b-2xl bg-white  border border-t-0 z-50'>
                <div className=' ms-2'>
                    <Link href="#work" onClick={(e) => handleScroll(e, "#hero")}>
                        <h1 className='text-base font-moderno text-orange-700 font-medium lead'>Onariam</h1>
                    </Link>

                </div>
                <div className='*:text-secondary *:font-medium cursor-pointer hover:text-neutral-900 uppercase *:text-xs gap-6 *:tracking-wider hidden sm:hidden md:flex md:flex-row lg:flex lg:flex-row xl:flex xl:flex-row '>
                    <Link href="#services" onClick={(e) => handleScroll(e, "#services")}>
                        <h1 className='hover:text-neutral-900 hover:font-medium'>Our Services</h1>
                    </Link>
                    <Link href="#work" onClick={(e) => handleScroll(e, "#work")}>
                        <h1 className='hover:text-neutral-900 hover:font-medium'>Our Work</h1>
                    </Link>
                    <Link href="#pricing" onClick={(e) => handleScroll(e, "#pricing")}>
                        <h1 className='hover:text-neutral-900 hover:font-medium'>Pricing</h1>
                    </Link>
                    {/* <Link href="#faq" onClick={(e) => handleScroll(e, "#faq")}>
                        <h1 className='hover:text-neutral-900 hover:font-medium'>Faq&apos;s</h1>
                    </Link> */}
                </div>
                <div className=''>
                    <Link href="https://cal.com/onariam" target="_blank" rel="noopener noreferrer">
                        <button className='text-xs rounded-full py-2.5 px-5 bg-orange-700 hover:bg-[#292929] text-white uppercase'>let’s discuss</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};