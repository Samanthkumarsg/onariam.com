"use client";
import React, { useState, useCallback, useTransition, memo, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";

interface PricingPlan {
    name: string;
    plan: number;
    description: string;
    features: string[];
}

const pricingPlans: PricingPlan[] = [
    {
        name: "Starter",
        plan: 1200,
        description: "Perfect for small businesses or startups looking for a clean, modern website with essential UX design",
        features: [
            "Custom 3-5 page website",
            "UX research & wireframing",
            "Mobile-friendly & responsive design",
            "Next.js + Other Tech stacks Implementated",
            "SEO Optimized with high Retention",
            "Clearly defined scope with a detailed SOW document",
        ],
    },
    {
        name: "Premium",
        description: "Ideal for growing businesses needing a more advanced website with enhanced UX and functionality.",
        plan: 3500,
        features: [
            "Everything in Starter",
            "Custom 5-10 page website",
            "Advanced UX research & interactive wireframes",
            "Smooth animations & microinteractions",
            "SEO optimization & Core Web Vitals improvements",
            "Headless CMS Integration",
        ],
    },
    {
        name: "Enterprise",
        description: "Designed for companies requiring a high-performance, scalable digital experience.",
        plan: 7500,
        features: [
            "Everything in Premium",
            "Custom UX strategy & full-scale design",
            "Large-scale website or web application",
            "API integrations & custom development",
            "Ongoing support & maintenance",
            "A/B testing & user analytics",
        ],
    },
];

const CaseStudies: React.FC = memo(() => {
    const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(pricingPlans[0]);
    const [isPending, startTransition] = useTransition();
    const planRef = useRef<HTMLDivElement | null>(null);

    const handlePlanChange = useCallback((plan: PricingPlan) => {
        startTransition(() => setSelectedPlan(plan));
    }, []);

    useEffect(() => {
        if (selectedPlan && planRef.current) {
            gsap.fromTo(
                planRef.current,
                { opacity: 0, y: -20, scale: 0.9 },
                { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "power3.out" }
            );
        }
    }, [selectedPlan]);

    return (

        <div className="w-full border border-orange-100 grid grid-cols-1  sm:grid-col-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1  p-4 rounded-3xl overflow-hidden bg-white">


            {/* Features Section */}
            <div ref={planRef} className={`col-span-2  h-fit w-full flex flex-col items-center bg-gradient-to-t from-white to-gray-700/10  rounded-xl
              `}>

                <div className="flex flex-col items-start  rounded-2xl   w-full">
                    <div className="p-8 w-full flex flex-col  items-center justify-center">
                        <h2 className="text-lg   mb-1 font-medium text-orange-700 ">Grado Babo</h2>
                        <h1 className="text-base font-normal tracking-wide text-gray-600 w-3/4 text-center ">An elegant, responsive website for an Italian restaurant, featuring a dynamic menu, table reservations, and immersive gallery.</h1>
                        {/* <h3 className="text-md text-secondary  ">Features</h3> */}

                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-4 p-4  w-fit  rounded-xl ">
                        {selectedPlan.features.map((item, index) => (
                            <div key={index} className="text-sm rounded-xl font-normal tracking-wider p-4 text-gray-700  flex items-center justify-center text-center w-full sm:w-full md:w-fit lg:w-fit xl:w-fit   bg-gray-700/10 ">{item}</div>
                        ))}


                    </div >
                </div >

                <div className=" flex flex-col w-full items-center justify-center  py-6 mt-4 ">
                    <h1 className="font-normal text-xl text-secondary mb-4 text-center"> Want to know more ? </h1>
                    <div className="flex flex-row gap-4 flex-wrap items-center  justify-center">
                        <Link href="https://www.grado-babo.com" target="_blank" rel="noopener noreferrer">
                            <button className="cta-button uppercase bg-secondary hover:bg-orange-700 text-white text-sm font-medium tracking-wide rounded-full  px-8 py-3 " >
                                Visit Grado Babo ◥
                            </button>
                        </Link>
                        <Link href="https://www.grado-babo.com" target="_blank" rel="noopener noreferrer">
                            <button className="cta-button uppercase border border-secondary hover:border-orange-700 hover:bg-orange-700 text-secondary hover:text-white text-sm font-medium tracking-wide rounded-full  px-8 py-3 " >
                                Get this  ◥
                            </button>
                        </Link>
                    </div>
                </div>

            </div >
        </div >
    );
});

export default CaseStudies;
