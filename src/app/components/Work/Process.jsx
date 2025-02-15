"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RxRadiobutton } from "react-icons/rx";
import { ProcessCard } from './ProcessCard';

gsap.registerPlugin(ScrollTrigger);

export const Process = () => {
    const servicesRef = useRef(null);
    const borderRef = useRef(null);

    useEffect(() => {

        const cards = servicesRef.current?.children;
        const borderLine = borderRef.current;

        if (cards && borderLine) {
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
                        start: "top 80%",
                        toggleActions: "play reverse play reverse",
                        markers: false,
                    },
                }
            );


            // Animate the border line's height
            gsap.fromTo(
                borderLine,
                { height: '0%' },
                {
                    height: '100%',
                    duration: 1.5,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: servicesRef.current,
                        start: "top 40%", // You can adjust this value to control when the animation starts
                        end: "bottom top",
                        scrub: true, // This ensures the animation is synced with scroll
                        markers: false,
                    },
                }
            );
        }
    }, []);



    return (
        <div ref={servicesRef} className='flex flex-col items-center gap-10 rounded-3xl p-4 sticky top-0'>
            {/* Animated border line */}
            <div ref={borderRef} className='border border-orange-700 h-full absolute z-20 left-1/2 '></div>
            <div className='border border-orange-700/10 h-full absolute z-10  left-1/2'></div>


            <ProcessCard
                className='col-span-1 row-span-2'
                icon={<RxRadiobutton className="size-7 text-orange-700 " />}
                id={1}
                title="Intro Call & Discovery"
                description='We start with a conversation to understand your goals, challenges, and vision for the project.'
            />
            <ProcessCard
                className='col-span-2 row-span-1'
                icon={<RxRadiobutton className="size-7 text-orange-700" />}
                id={2}
                title="Strategy & Planning"
                description="Based on your needs, we create a detailed strategy, including timelines, scope, and design concepts."
            />
            <ProcessCard
                className='col-span-1 row-span-1'
                icon={<RxRadiobutton className="size-7 text-orange-700" />}
                id={3}
                title="Design & Development"
                description="We bring your vision to life with stunning designs and efficient development, ensuring seamless user experience."
            />
            <ProcessCard
                className='col-span-1 row-span-1'
                icon={<RxRadiobutton className="size-7 text-orange-700" />}
                id={4}
                title="Review & Feedback "
                description="You’ll get regular updates and the opportunity to provide feedback for refinement."
            />
            <ProcessCard
                className='col-span-2 row-span-1'
                icon={<RxRadiobutton className="size-7 text-orange-700" />}
                id={5}
                title="Final Handover & Support "
                description="Once approved, we deliver the final product along with ongoing support to ensure smooth operation."
            />
        </div>
    );
};
