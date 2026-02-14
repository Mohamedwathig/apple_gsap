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

    </section>
  )
}

export default Hero