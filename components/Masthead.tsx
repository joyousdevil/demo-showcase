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
        className="absolute w-full h-full object-cover"
        >
        <source src="/assets/smoke.mp4" type="video/mp4; codecs=hvc1" />
        <source src="/assets/smoke.webm" type="video/webm; codecs=vp9" />
      </video>
      <div className="flex-grow-0 pb-20 md:pb-10 transition-all duration-1000">
        <Image 
          src="/assets/joyousdevil.png" 
          width={128 / 3}
          height={128 / 3}
          alt="joyousdevil"

        />
      </div>
      <div className="p-12 font-bold z-10 text-stone-100 drop-shadow-[0_5px_3px_rgba(0,0,0,0.4_)]">
        <h1 className="mb-6 font-bold text-5x xl:text-6xl">
          Landing Page
        </h1>
        <h2 className="mb-5 text-3xl xl:text-4xl tracking-tight">
          Lorem, ipsum, subheader.
        </h2>
      </div>
    </div>
  )
}

export default Masthead
