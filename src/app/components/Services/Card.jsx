"use client";
import React from "react";

export const Card = ({ icon, className = "", title, description }) => {
    const hasColSpan1 = className.includes("col-span-1");
    const containerClasses = hasColSpan1
        ? "mt-7 w-full flex flex-wrap gap-4"
        : "mt-7 w-full gap-4 ";

    const childClasses =
        "flex items-center justify-center w-full   bg-orange-100/70 text-orange-700 font-medium tracking-wider p-2 rounded text-xs ";

    return (
        <div
            className={`flex flex-col items-start justify-start rounded-3xl bg-gray-50  border p-4 ${className}`}
        >
            <div className="rounded-xl rounded-tr-none rounded-b-none  pb-0  mb-1  flex items-start justify-start ">{icon}</div>
            <div className="flex flex-col ">
                <h1 className="text-lg text-orange-700 font-semibold mb-4 uppercase  pt-1 rounded-b-xl rounded-r-none">{title}</h1>
                <p className="text-sm font-normal leading-normal text-gray-600 tracking-wide">{description}</p>
            </div>

            <div className={`*:tracking-wider sm:w-full md:w-fit lg:w-fit xl:w-fit *:text-left *:text-orange-700 *:text-xs *:font-medium *:rounded-xl *:p-3 *:w-fit *:bg-orange-700/10 ${containerClasses} flex gap-4 flex-wrap`}>
                {title === "UI/UX" ? (
                    <>
                        <div className={childClasses}>User Research & Behavioral Insights</div>
                        <div className={childClasses}>Wireframing & Rapid Prototyping</div>
                        <div className={childClasses}>UI Design Systems</div>
                        <div className={childClasses}>Responsive, Adaptive Design Standards</div>
                        <div className={childClasses}>UX Testing & Continuous Refinement</div>
                    </>
                ) : title === "Web Development" ? (
                    <>
                        <div className={childClasses}>Performance-Optimized Architecture</div>
                        <div className={childClasses}>Seamless CMS Integration</div>
                        <div className={childClasses}>Cross-Platform Compatibility</div>
                        <div className={childClasses}>Future-Ready Tech Stacks</div>
                    </>
                ) : title === "SEO" ? (
                    <>
                        <div className={childClasses}>Finding the Right Words & Outsmarting the Competition</div>
                        <div className={childClasses}>Making Your Website Fast & Search-Friendly</div>
                        <div className={childClasses}>Growing with Smart, Engaging Content</div>
                    </>
                ) : title === "Branding" ? (
                    <>
                        <div className={childClasses}>Brand Strategy & Positioning</div>
                        <div className={childClasses}>Visual Identity Systems</div>
                        <div className={childClasses}>Storytelling That Inspires Loyalty</div>
                    </>
                ) : title === "Marketing" ? (
                    <>
                        <div className={childClasses}>Multi-Channel Campaign Innovation</div>
                        <div className={childClasses}>Analytics & Performance Tracking</div>
                        <div className={childClasses}>Personalized Marketing Automation</div>
                    </>
                ) : title === "No-Codes" ? (
                    <>
                        <div className={childClasses}>Rapid Deployment Frameworks</div>
                        <div className={childClasses}>Customizable, Scalable Builds</div>
                        <div className={childClasses}>Integration with Emerging Tech</div>
                    </>
                ) : null}
            </div>

        </div>
    );
};