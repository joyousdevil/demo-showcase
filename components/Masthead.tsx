import React from 'react'
import Image from 'next/image'

const Masthead: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="z-0 absolute w-full h-full object-cover"
        >
        <source src="/assets/smoke.mp4" type="video/mp4; codecs=hvc1" />
        <source src="/assets/smoke.webm" type="video/webm; codecs=vp9" />
      </video>
      <div className="absolute top-0  flex-grow-0 pt-10 md:pt-10 transition-all duration-1000">
        <Image 
          src="/assets/joyousdevil.png" 
          width={128 / 3}
          height={128 / 3}
          alt="joyousdevil"

        />
      </div>
      <div className="absolute bottom-0 flex-grow-0  md:pb-5 transition-all duration-1000 ">
        <Image
          src="/assets/scroll-down.png"
          width={ 188 / 3 }
          height={ 188 / 3 }
          alt="arrow down" 
        />
      </div>
      <div className="font-bold z-10 text-stone-100 drop-shadow-[0_5px_3px_rgba(0,0,0,0.4_)] text-center">
        <h1 className="mb-6 font-bold text-5xl xl:text-6xl">
          Turnkey Solutions
        </h1>
        <h2 className="mb-5 text-4xl xl:text-5xl tracking-tight">
          <span>App development, </span> <span>done right.</span>
        </h2>
      </div>
    </div>
  )
}

export default Masthead
