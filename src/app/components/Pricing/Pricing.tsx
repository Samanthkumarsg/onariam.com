"use client";
import React, { useState, useMemo, useCallback, useTransition, memo, useEffect, useRef } from "react";
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
            "Next.js + Other Tech stacks Implementation",
            "Free consultation",
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

const Pricing: React.FC = memo(() => {
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
        <div className="w-full border grid grid-cols-1 sm:grid-col-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3  p-8 gap-6 rounded-3xl">
            <div className="w-full flex flex-col">
                <div className="w-full flex flex-col mb-6">
                    <h2 className="text-lg mb-1 font-bold text-secondary">Select Your Plan</h2>
                    <h3 className="text-base font-normal text-neutral-500  ">A plan that scales with your rapidly growing business</h3>
                </div>
                <div className="flex flex-col gap-4">
                    {pricingPlans.map((item) => (
                        <div
                            key={item.name}
                            className={`flex flex-col items-start justify-center rounded-md text-lg w-full p-3 border cursor-pointer 
                                ${selectedPlan?.name === item.name ? "ring-1 ring-orange-700 text-orange-700" : ""}`}
                            onClick={() => handlePlanChange(item)}
                        >
                            <h1 className="text-sm font-medium  text-secondary">{item.name}</h1>
                            <h1 className="text-lg font-semibold text-orange-700">€ {item.plan}</h1>
                        </div>
                    ))}
                </div>
            </div>

            {/* Features Section */}
            <div ref={planRef} className="col-span-2 w-full flex gap-4 bg-neutral-50 p-6 rounded-2xl ">
                {selectedPlan && (
                    <div className="flex flex-col items-start">
                        <div className="w-full flex flex-col mb-6">
                            {/* <h2 className="text-lg mb-1 font-semibold text-secondary">Features</h2> */}
                            <h3 className="text-md text-secondary  ">{selectedPlan?.description}</h3>
                        </div>
                        <div className="flex flex-col gap-4 ">
                            {selectedPlan.features.map((item, index) => (
                                <div key={index} className="text-sm rounded text-orange-700">{item}</div>
                            ))}
                            <div className="mt-6">
                                <Link href="https://cal.com/onariam" target="_blank" rel="noopener noreferrer">
                                    <button className="cta-button uppercase bg-[#292929]  hover:bg-orange-700  text-white text-sm font-medium tracking-wide rounded-full px-20 py-3 " >
                                        Book a call
                                    </button>
                                </Link>
                            </div>

                        </div>

                    </div>
                )}
            </div>
        </div>
    );
});

export default Pricing;
