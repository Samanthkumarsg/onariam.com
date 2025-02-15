"use client"
import React, { useEffect, useRef } from 'react';
import { Card } from './Card';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RxRulerSquare, RxCode, RxMagnifyingGlass, RxBarChart, RxTransform, RxFontBold } from "react-icons/rx";

gsap.registerPlugin(ScrollTrigger);

export const Services = () => {
    const servicesRef = useRef(null);


    useEffect(() => {
        const cards = servicesRef.current?.children

        if (cards) {
            gsap.fromTo(
                cards,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: servicesRef.current,
                        start: "top 60%",
                        toggleActions: "play reverse play reverse",
                        markers: false,
                    },
                }
            );
        }
    }, []);

    return (
        <div ref={servicesRef} className='flex flex-col sm:flex sm:flex-col md:grid md:grid-cols-3 md:grid-rows-3 lg:grid lg:grid-cols-3 lg:grid-rows-3 xl:grid xl:grid-cols-3 xl:grid-rows-3 gap-4  rounded-3xl p-4 border '>
            <Card className='col-span-1 row-span-2' icon={<RxRulerSquare className="size-10 text-orange-700" />} hasChildrenPills={true} title="UI/UX" description='We craft intuitive, user-friendly interfaces with research-driven UX, sleek UI designs, and interactive prototypes ensuring seamless digital experiences.' />
            <Card className='col-span-2 row-span-1' icon={<RxCode className="size-10 text-orange-700" />} hasChildrenPills={false} title="WEB DEVELOPMENT" description="We build high-performance websites faster and smarter, seamless functionality, and optimized user experience" />
            <Card className='col-span-1 row-span-1' icon={<RxMagnifyingGlass className="size-10 text-orange-700" />} hasChildrenPills={false} title="SEO" description="We optimize your website for higher rankings, more traffic, and better conversions." />
            <Card className='col-span-1 row-span-1' icon={<RxFontBold className="size-10 text-orange-700" />} hasChildrenPills={false} title="BRANDING " description="We create memorable brands with a clear identity, and a compelling story that connects with your audience." />
            <Card className='col-span-2 row-span-1' icon={<RxBarChart className="size-10 text-orange-700" />} hasChildrenPills={false} title="MARKETING " description="Strategic, data-driven marketing that drives engagement and conversions" />
            <Card className='col-span-1 row-span-1' icon={<RxTransform className="size-10 text-orange-700" />} hasChildrenPills={false} title="No-CODE " description="We also build powerful, scalable websites and apps without writing a single line of code" />
        </div>
    );
};
