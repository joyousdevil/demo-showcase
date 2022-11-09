// @ts-nocheck
import React from "react"
import Carousel from "./Carousel"
import CarouselItem from "./Carousel-Item"
import Review from "./Review"

const Testimonials: React.FC = () => (
<Carousel className="bg-neutral-900 text-stone-100 py-10 lg:py-20">
    <CarouselItem index={0}>
        <Review by="Mark (Google)">
            Superb work. This company really cares about the privacy of their clients.
        </Review>
    </CarouselItem>
    <CarouselItem index={1}>
        <Review by="John (MasterCard)">
            The astonishing part of working with PRiSMA is how well fortified their software security is.
        </Review>
    </CarouselItem>
    <CarouselItem index={2}>
        <Review by="Jennifer (TikTok)">
            PRiSMA really knows how to keep things fresh and always have an eye on the next big thing.
        </Review>
    </CarouselItem>
    <CarouselItem index={3}>
        <Review by="Sheila (Facebook)">
            Expertise and discipline meets computing; the world runs on JavaScript.
        </Review>
    </CarouselItem>
    <CarouselItem index={4}>
        <Review by="Duncan (Instagram)">
            We needed consultants to help out with a huge project. PRiSMA found the bugs in twenty terabytes of code just under a few hours.
        </Review>
    </CarouselItem>
    <CarouselItem index={5}>
        <Review by="Samuel (Youtube)">
            Ads are bad. No ads. Remove ads. Thank you PRiSMA.
        </Review>
    </CarouselItem>
</Carousel>
)

export default Testimonials