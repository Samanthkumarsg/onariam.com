"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { SiFigma, SiWebflow, SiVercel, SiSvelte, SiAstro, SiMiro, SiTailwindcss, SiPostman, SiReact, SiNextdotjs, SiGraphql, SiAppwrite, SiJavascript, SiDocker, SiPrisma, SiAmazonwebservices } from "react-icons/si";
import Link from "next/link";

export const Hero = () => {


    useEffect(() => {

        gsap.from(".hero-title", {
            opacity: 0,
            y: -50,
            duration: 1,
            ease: "power3.out",
        });

        gsap.from(".hero-subtitle", {
            opacity: 0,
            y: 20,
            duration: 1,
            delay: 0.5,
            ease: "power3.out",
        });

        gsap.from(".hero-mini-subtitle", {
            opacity: 0,
            y: 20,
            duration: 1,
            delay: 2,
            ease: "power3.out",
        });

        gsap.from(".tech-stack-icon", {
            opacity: 0,
            scale: 0.5,
            duration: 0.2,
            stagger: 0.1,
            delay: 1.6,
            ease: "back.out(1.7)",
        });

        gsap.from(".cta-button", {
            opacity: 0,
            y: 50,
            duration: 1,
            delay: 1.2,
            ease: "power3.out",
        });


    }, []);

    return (
        <div className="h-screen w-full flex flex-col items-center justify-center inset-0 bg-[radial-gradient(#f5f5f5_1px,transparent_1px)] [background-size:8px_8px] p-6">

            <div className="flex flex-col items-center justify-center">
                <div className="text-3xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-5xl uppercase leading-normal text-center font-medium text-secondary text-pretty">
                    <h1 className="hero-title leading-normal">not just another design agency</h1>
                    <h1 className="hero-title text-center">
                         <span className="text-orange-700" > Creating Digital Ecosystem</span>
                    </h1>
                </div>
                <h2 className="hero-subtitle text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg text-neutral-600 font-normal my-4 leading-relaxed tracking-wide text-center line-clamp-2">
                    Stunning designs, seamless experiences, and websites that drive results crafted just for you
                </h2>
                <Link href="https://cal.com/onariam" target="_blank" rel="noopener noreferrer">
                    <button className="cta-button uppercase bg-[#292929] hover:bg-orange-700  text-white text-base font-medium tracking-wide rounded-full px-20 py-3 mt-6" >
                        Book a call
                    </button>
                </Link>

                <div className="flex flex-col items-center justify-center mt-16">
                    <h4 className="text-base font-medium text-secondary hero-mini-subtitle">Tech stack and tools we use</h4>
                    <div className="mt-4 grid grid-cols-8 gap-6 max-w-screen-sm">
                        <SiFigma className="tech-stack-icon text-secondary size-5" />
                        <SiMiro className="tech-stack-icon text-secondary size-5" />
                        <SiWebflow className="tech-stack-icon text-secondary size-5" />
                        <SiTailwindcss className="tech-stack-icon text-secondary size-5" />
                        <SiReact className="tech-stack-icon text-secondary size-5" />
                        <SiAstro className="tech-stack-icon text-secondary size-5" />
                        <SiSvelte className="tech-stack-icon text-secondary size-5" />
                        <SiVercel className="tech-stack-icon text-secondary size-5" />
                        <SiGraphql className="tech-stack-icon text-secondary size-5" />
                        <SiAppwrite className="tech-stack-icon text-secondary size-5" />
                        <SiNextdotjs className="tech-stack-icon text-secondary size-5" />
                        <SiJavascript className="tech-stack-icon text-secondary size-5" />
                        <SiPostman className="tech-stack-icon text-secondary size-5" />
                        <SiDocker className="tech-stack-icon text-secondary size-5" />
                        <SiPrisma className="tech-stack-icon text-secondary size-5" />
                        <SiAmazonwebservices className="tech-stack-icon text-secondary size-5" />
                    </div>
                </div>
            </div>
        </div>
    );
};
