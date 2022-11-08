// @ts-nocheck
import React from "react"
import Image from "next/image"
import SliderContainer, { SliderItem } from "./Slider"

const ClientLogos: React.FC = () => (
    <>
        <SliderContainer contentWidth={576} initialOffsetX={0}>
            <SliderItem width={96}>
             <Image
                src="/assets/logos/amazon.png"
                width={96}
                height={96}
                alt="amazon logo"
            />
            </SliderItem>
            <SliderItem width={96}>
            <Image
                src="/assets/logos/apple.png"
                width={96}
                height={96}
                alt="apple logo"
            />
            </SliderItem>
            <SliderItem width={96}>
            <Image
                src="/assets/logos/google.png"
                width={96}
                height={96}
                alt="google logo"
            />
            </SliderItem>
            <SliderItem width={96}>
            <Image
                src="/assets/logos/instagram.png"
                width={96}
                height={96}
                alt="instagram logo"
            />
            </SliderItem>
            <SliderItem width={96}>
            <Image
                src="/assets/logos/mastercard.png"
                width={96}
                height={96}
                alt="mastercard logo"
            />
            </SliderItem>
            <SliderItem width={96}>
            <Image
                src="/assets/logos/mcdonalds.png"
                width={96}
                height={96}
                alt="mcdonalds logo"
            />
            </SliderItem>
            </SliderContainer>
            <SliderContainer contentWidth={672} initialOffsetX={2}>
            <SliderItem width={96}>
            <Image
                src="/assets/logos/nasa.png"
                width={96}
                height={96}
                alt="nasa logo"
            />
            </SliderItem>
            <SliderItem width={96}>
            <Image
                src="/assets/logos/netflix.png"
                width={96}
                height={96}
                alt="netflix logo"
            />
            </SliderItem>
            <SliderItem width={96}>
            <Image
                src="/assets/logos/tiktok.png"
                width={96}
                height={96}
                alt="tiktok logo"
            />
            </SliderItem>
            <SliderItem width={96}>
            <Image
                src="/assets/logos/tinder.png"
                width={96}
                height={96}
                alt="tinder logo"
            />
            </SliderItem>
            <SliderItem width={96}>
             <Image
                src="/assets/logos/toyota.png"
                width={96}
                height={96}
                alt="toyota logo"
            />
            </SliderItem>
            <SliderItem width={96}>
            <Image
                src="/assets/logos/twitter.png"
                width={96}
                height={96}
                alt="twitter logo"
            />
            </SliderItem>
            <SliderItem width={96}>
            <Image
                src="/assets/logos/youtube.png"
                width={96}
                height={96}
                alt="youtube logo"
            />
            </SliderItem>
        </SliderContainer>
    </>
)

export default ClientLogos