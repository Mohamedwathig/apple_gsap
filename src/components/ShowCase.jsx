import React from 'react';
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger"; // register plugin
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

const ShowCase = () => {
  // fixed typo: max-width
  const isTablet = useMediaQuery({ query: '(max-width:1024px)' });

   useGSAP(() => {
     if (isTablet) {
  // Clear any GSAP transforms but ensure visibility
  gsap.set(".mask img", { 
    clearProps: "all", // removes matrix and scale from CSS
    zIndex: 30 
  });
  
  // Make content visible with proper styling
  gsap.set(".content", { 
    opacity: 1, 
    y: 0, 
    zIndex: 40, // Increased z-index to ensure it's above everything
    display: "block",
    visibility: "visible" // Explicitly set visibility
  });
  
  // Also ensure the parent containers have proper positioning
  gsap.set("#showcase .media", {
    position: "relative",
    zIndex: 1
  });
  
  return;
}
        if(!isTablet) {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: '#showcase',
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: true,
                    pin: true,
                }
            });

            timeline
                .to('.mask img', {
                    transform: 'scale(1.1)'
                }).to('.content', { opacity: 1, y: 0, ease: 'power1.in' });
        }
    }, [isTablet])

  return (
    <section id='showcase'>
      <div className='media'>
        <video src='/videos/game.mp4' loop muted autoPlay playsInline />
        <div className='mask'>
          <img src='/mask-logo.svg' alt="Mask Logo" />
        </div>
        <div className='content'>
          <div className='wrapper'>
            <div className='lg:max-w-md'>
              <h2>Rocker Ship</h2>
              <div className='space-y-10 mt-7 pe-10'>
                <p>
                  Introducing{" "}
                  <span className='text-white'>
                    M4, the next generation of Apple Silicon
                  </span>
                  . M4 powers
                </p>
                <p>
                  Powered by the all-new Apple M4 chip, this MacBook delivers breakthrough performance and incredible energy efficiency. Built on next-generation architecture, the M4 combines advanced CPU and GPU cores to handle everything from everyday tasks to professional creative workflows with remarkable speed.
                </p>
                <p>
                  With an enhanced Neural Engine and improved graphics performance, the M4 enables seamless multitasking, smoother 3D rendering, and faster AI-driven applications — all while maintaining exceptional battery life. It’s engineered to push performance further without compromising portability.
                </p>
                <p className='text-primary'>
                  Learn more about Apple Intelligence
                </p>
              </div>
            </div>
            <div className='space-y-14'>
              <div className='space-y-2'>
                <p>Up to</p>
                <h3>4x faster</h3>
                <p>Pro rendering performance than M2</p>
              </div>
              <div className='space-y-2'>
                <p>Up to</p>
                <h3>1.5x faster</h3>
                <p>CPU performance than M2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowCase;