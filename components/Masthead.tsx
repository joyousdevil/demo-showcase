import React, { useRef, useContext, useState, useCallback } from 'react'
import Image from 'next/image'
import { ScrollContext } from '../utils/scroll-observer'

const Masthead: React.FC = () => {
  const [ imageLoaded, setImageLoaded ] = useState(false)
  const refContainer = useRef<HTMLDivElement>(null)
  const { scrollY } = useContext(ScrollContext)

  let progress = 0 

  const { current: elContainer } = refContainer
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight)
  }

  const handleImageLoaded = useCallback(() => {
    setImageLoaded(true)
  }, [])

  return (
    <div 
      ref={refContainer}
      className="min-h-screen flex flex-col items-center justify-center sticky top-0 -z-10"
      style={{
        transform: `translateY(-${progress * 20}vh)`
      }}
    >
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="z-0 absolute w-full h-full object-cover"
        >
        <source src="/assets/winterfeels.mp4" type="video/mp4; codecs=hvc1" />
        <source src="/assets/winterfeels.webm" type="video/webm; codecs=vp9" />
      </video>
      <div className={`absolute top-0 z-10 flex-grow-0 pt-20 md:pt-10 transition-all duration-1000 ${ imageLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Image 
          src="/assets/logo.png" 
          width={64}
          height={64}
          alt="company logo"
        />
      </div>
      <div className={`absolute bottom-0 z-10 flex-grow-0 pb-20 md:pb-10 transition-all duration-1000 ${ imageLoaded ? 'opacity-100' : 'opacity-0 -translate-y-10'}`}>
        <Image
          src="/assets/scroll-down.png"
          width={ 188 / 3 }
          height={ 188 / 3 }
          alt="arrow down"
          onLoad={handleImageLoaded} 
        />
      </div>
      <div className="font-bold z-10 text-stone-100 drop-shadow-[0_5px_3px_rgba(0,0,0,0.5_)] text-center">
        <h1 className="mb-6 font-bold text-5xl xl:text-6xl">
          PRiSMA
        </h1>
        <h2 className="px-5 mb-5 text-4xl xl:text-5xl tracking-tight">
          <span>App development, </span> <span>done right.</span>
        </h2>
        <div className="tracking-normal text-normal underline">
          Portfolio website made by <strong>Vincent Camacho</strong>
        </div>
      </div>
      <div className="absolute bottom-40 z-10 text-stone-100 text-center text-xs italic drop-shadow-[0_5px_3px_rgba(0,0,0,0.9_)]">
        <strong>Disclaimer: </strong>This website is a mockup. None of the claims and testimonials on this website are true.
      </div>
    </div>
  )
}

export default Masthead
