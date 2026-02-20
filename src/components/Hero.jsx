import React from 'react'
import { useEffect,useRef } from 'react'
const Hero = () => {
const videoRef=useRef();
    useEffect(()=>{
if (videoRef.current) {
  videoRef.current.playbackRate = 2;
}
},[])
    return (
    <section>
        <div>
            <h1> MacBook</h1>
            <img src='/title.png' alt='MacBook Title'/>
        </div>
        <video ref={videoRef} src='/videos/hero.mp4' autoPlay muted playsInline/>
        <div className='flex flex-center flex-col gap-3.5 '>
        <button className='text-white bg-blue-600 rounded-4xl py-2 px-4 hover:bg-blue-400  '>Buy</button>
        <p>From $1599 or $133/mo for 12 months</p>
        </div>
    </section>
  )
}

export default Hero