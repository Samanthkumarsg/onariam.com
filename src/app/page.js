"use client";
import { useEffect, useRef } from "react";
import { CommonLayout } from "./components/Sections/CommonLayout";
import { Hero } from "./components/Sections/Hero";
import { Services } from "./components/Services/Services";
import Lenis from 'lenis'
import { Process } from "./components/Work/Process";
import { Header } from "./components/Header/Header";
import Calendar from "./components/Calendar/Calendar";
import Pricing from "./components/Pricing/Pricing";

export default function Home() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      gestureOrientation: 'vertical',
      infinite: false,
    });

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
      <Header />
      <Hero />
      <CommonLayout text={"THIS IS"} title={"What we offer you"}>
        <Services />
      </CommonLayout>

      <CommonLayout text={"THIS IS"} title={"How we work"}>
        <Process />
      </CommonLayout>

      <CommonLayout text={"Our Simple "} title={"Pricing"}>
        <Pricing />
      </CommonLayout>

    </div>
  );
}
