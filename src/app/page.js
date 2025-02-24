"use client";
import { useEffect, useRef } from "react";
import { CommonLayout } from "./components/Sections/CommonLayout";
import { Hero } from "./components/Sections/Hero";
import { Services } from "./components/Services/Services";
import Lenis from 'lenis';
import { Process } from "./components/Work/Process";
import { Header } from "./components/Header/Header";
import Pricing from "./components/Pricing/Pricing";
import Footer from "./components/Footer/Footer";
import CaseStudies from "./components/caseStudies/CaseStudies";

export default function Home() {
  const scrollRef = useRef(null);
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      gestureOrientation: 'vertical',
      infinite: false,
    });
    lenisRef.current = lenis; // Store Lenis instance in ref

    function scrollLoop(time) {
      lenis.raf(time);
      requestAnimationFrame(scrollLoop);
    }

    requestAnimationFrame(scrollLoop);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} className="w-full mx-auto">
      <Header lenis={lenisRef} />
      <div id="hero"><Hero /></div>
      <CommonLayout text={"THIS IS"} title={"What we offer you"} id="services">
        <Services />
      </CommonLayout>
      <CommonLayout text={"THIS IS"} title={"How we work"} id="work">
        <Process />
      </CommonLayout>
      <CommonLayout text={"Our Clients Case Studies"} title={"Based on true Stories"} id="pricing">
        <CaseStudies /> 
      </CommonLayout>
      <CommonLayout text={"Simple  "} title={"Pricing"} id="pricing">
        <Pricing />
      </CommonLayout>
      <Footer />
    </div>
  );
}