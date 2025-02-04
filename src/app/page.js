"use client";
import { useEffect, useRef } from "react";
import { CommonLayout } from "./components/Sections/CommonLayout";
import { Hero } from "./components/Sections/Hero";
import { Services } from "./components/Services/Services";
import Lenis from 'lenis'
import { Process } from "./components/Work/Process";

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
      <Hero />
      <CommonLayout title={"What we offer you"}>
        <Services />
      </CommonLayout>

      <CommonLayout title={"How we work"}>
        <Process />
      </CommonLayout>

      <CommonLayout title={"How we work"}>
        <Process />
      </CommonLayout>
    </div>
  );
}
