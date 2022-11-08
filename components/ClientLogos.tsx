// @ts-nocheck
import React from "react"
import Image from "next/image"
import SliderContainer from "./Slider"

const ClientLogos: React.FC = () => (
    <>
        <SliderContainer>
            <Image
                src="/assets/heritage.png"
                width={150}
                height={150}
                alt="image"
            />
        </SliderContainer>
    </>
)

export default ClientLogos