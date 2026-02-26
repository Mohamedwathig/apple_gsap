import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  const videoRef = useRef()
  const logoRef = useRef()
  const logoSectionRef = useRef()

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: logoSectionRef.current,
          start: 'top top',
          end: '+=800',
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })

      tl.to(logoRef.current, {
        scale: 100,
        opacity: 1,
        ease: 'power1.in',
      })

      // Play video when it enters the viewport
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            videoRef.current?.play()
          } else {
            videoRef.current?.pause()
          }
        },
        { threshold: 0.3 }
      )

      if (videoRef.current) observer.observe(videoRef.current)

      return () => observer.disconnect()
    },
    { scope: logoSectionRef }
  )

  return (
    <>
      {/* ── Section 1 – pinned logo zoom ── */}
      <section
        ref={logoSectionRef}
        className="relative h-screen flex flex-col items-center justify-center bg-white overflow-hidden"
      >
        <img
          ref={logoRef}
          className="w-40 h-40 object-contain"
          src="/apple logo.png"
          alt="Apple Logo"
          style={{ transformOrigin: 'center center' }}
        />
        <p className="mt-6 text-gray-500 text-lg tracking-widest uppercase">
          Scroll to experience
        </p>
      </section>

      {/* ── Section 2 – MacBook + video ── */}
      <section className="min-h-screen bg-black flex flex-col items-center pt-20 gap-8">
        <div className="text-center">
          {/* <h1 className="text-white text-5xl font-semibold">MacBook</h1> */}
          <img src="/title.png" alt="MacBook Title" className="mx-auto mt-4" />
        </div>

        <video
          ref={videoRef}
          src="/videos/hero.mp4"
          muted
          playsInline
          loop
          className="w-full max-w-4xl rounded-2xl"
        />

        <div className="flex flex-col items-center gap-3">
          <button className="text-white bg-blue-600 rounded-full py-2 px-6 hover:bg-blue-400 transition-colors">
            Buy
          </button>
          <p className="text-gray-400 text-sm">
            From $1599 or $133/mo for 12 months
          </p>
        </div>
      </section>
    </>
  )
}

export default Hero