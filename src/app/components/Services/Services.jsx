"use client";
import React, { useEffect, useRef } from "react";
import { Card } from "./Card";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RxRulerSquare, RxCode, RxMagnifyingGlass, RxBarChart, RxTransform, RxFontBold } from "react-icons/rx";

gsap.registerPlugin(ScrollTrigger);

export const Services = () => {
    const servicesRef = useRef(null);

    useEffect(() => {
        const cards = servicesRef.current?.children;

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
        <div
            ref={servicesRef}
            className="flex flex-col sm:flex sm:flex-col md:flex md:flex-col  lg:grid lg:grid-cols-3 lg:grid-rows-subgrid xl:grid xl:grid-cols-3 xl:grid-rows-subgrid gap-4 rounded-3xl p-4 border border-orange-100  *:border *:border-orange-100 bg-white  "
        >
            <Card
                className="col-span-1 row-span-2 "
                icon={<RxRulerSquare className="size-10 text-orange-700/80" />}
                title="UI/UX"
                description="We design the future of interaction intuitive, user-centric interfaces powered by deep research, cutting-edge UX strategies, and visually striking UI. From dynamic wireframes to interactive prototypes, we deliver seamless, accessible digital experiences that evolve with your clients."
            />
            <Card
                className="col-span-2 row-span-1"
                icon={<RxCode className="size-10 text-orange-700/80" />}
                title="Web Development"
                description="We build tomorrow’s websites today—fast, scalable, and flawless. Our development fuses high performance with smart functionality, ensuring your site thrives and delivers optimized experiences that keep your clients coming back."
            />
            <Card
                className="col-span-1 row-span-1"
                icon={<RxMagnifyingGlass className="size-10 text-orange-700/80" />}
                title="SEO "
                description="We amplify your presence with SEO strategies built on predictive analytics and adaptive optimization, driving traffic, enhancing discoverability, and turning clicks into conversions for your clients."
            />
            <Card
                className="col-span-1 row-span-1"
                icon={<RxFontBold className="size-10 text-orange-700/80" />}
                title="Branding "
                description="We forge brands that stand the test of time—bold, authentic identities with compelling narratives that resonate deeply and build lasting connections with your clients."
            />
            <Card
                className="col-span-2 row-span-1"
                icon={<RxBarChart className="size-10 text-orange-700/80" />}
                title="Marketing"
                description="We craft campaigns that resonate—data-powered strategies, immersive storytelling, and omnichannel precision to drive engagement, conversions, and measurable impact for your clients."
            />
            <Card
                className="col-span-1 row-span-1"
                icon={<RxTransform className="size-10 text-orange-700/80" />}
                title="No-Code"
                description="We accelerate innovation with powerful, scalable websites and apps—no code required. Using cutting-edge platforms, we deliver enterprise-grade solutions with agility, empowering your clients to launch faster."
            />
        </div>
    );
};