// @ts-nocheck
import React from 'react'
import { Tile, TileBackground, TileContent, TileWrapper } from './Tile'
import { WorkBackground, WorkContainer, WorkLeft, WorkRight } from './Work'
import Image from 'next/image'

const Works = () => (
<TileWrapper numOfPages={8}>
    <TileBackground>
        <WorkBackground />
    </TileBackground>
    <TileContent>
        <Tile 
        page={0} 
        renderContent={({ progress }) => (
            <WorkContainer>
                <WorkLeft progress={progress}>
                    <div className="text-center">We made</div>
                    <div className="text-center text-4xl md:text-5xl font-semibold tracking-tight">iOS 16 faster.</div>
                </WorkLeft>
                <WorkRight progress={progress}>
                    <Image
                        src="/assets/works/workexample0.png"
                        width={840}
                        height={1620}
                        alt="ios16"
                    />
                </WorkRight>
            </WorkContainer>
       )}>
        </Tile>
        <Tile 
        page={1} 
        renderContent={({ progress }) => (
            <WorkContainer>
                <WorkLeft progress={progress}>
                    <div className="text-center">We redefined</div>
                    <div className="text-center text-4xl md:text-5xl font-semibold tracking-tight">iOS Navigation.</div>
                </WorkLeft>
                <WorkRight progress={progress}>
                    <Image
                        src="/assets/works/workexample1.png"
                        width={840}
                        height={1620}
                        alt="navigation" 
                    />
                </WorkRight>
            </WorkContainer>     
       )}>
        </Tile>
        <Tile 
        page={2} 
        renderContent={({ progress }) => (
            <WorkContainer>
                <WorkLeft progress={progress}>
                    <div className="text-center">We improved</div>
                    <div className="text-center text-4xl md:text-5xl font-semibold tracking-tight">iOS Image Processing</div>
                </WorkLeft>
                <WorkRight progress={progress}>
                    <Image
                        src="/assets/works/workexample2.png"
                        width={840}
                        height={1620}
                        alt="camera" 
                    />
                </WorkRight>
            </WorkContainer>
       )}>
        </Tile>
         <Tile 
        page={3} 
        renderContent={({ progress }) => (
            <WorkContainer>
                <WorkLeft progress={progress}>
                    <div className="text-center">We redid</div>
                    <div className="text-center text-4xl md:text-5xl font-semibold tracking-tight">iOS Photos</div>
                </WorkLeft>
                <WorkRight progress={progress}>
                    <Image
                        src="/assets/works/workexample3.png"
                        width={840}
                        height={1620}
                        alt="photos" 
                    />
                </WorkRight>
            </WorkContainer>
       )}>
        </Tile>
        <Tile 
        page={4} 
        renderContent={({ progress }) => (
            <WorkContainer>
                <WorkLeft progress={progress}>
                    <div className="text-center">We secured</div>
                    <div className="text-center text-4xl md:text-5xl font-semibold tracking-tight">PayPal&lsquo;s Crypto Banking</div>
                </WorkLeft>
                <WorkRight progress={progress}>
                    <Image
                        src="/assets/works/workexample7.png"
                        width={840}
                        height={1620}
                        alt="paypal" 
                    />
                </WorkRight>
            </WorkContainer>
       )}>
        </Tile>
        <Tile 
        page={5} 
        renderContent={({ progress }) => (
            <WorkContainer>
                <WorkLeft progress={progress}>
                    <div className="text-center">We sped up</div>
                    <div className="text-center text-4xl md:text-5xl font-semibold tracking-tight">Instagram Stories</div>
                </WorkLeft>
                <WorkRight progress={progress}>
                    <Image
                        src="/assets/works/workexample4.png"
                        width={840}
                        height={1620}
                        alt="ig stories" 
                    />
                </WorkRight>
            </WorkContainer>
       )}>
        </Tile>
        <Tile 
        page={6} 
        renderContent={({ progress }) => (
            <WorkContainer>
                <WorkLeft progress={progress}>
                    <div className="text-center">We removed</div>
                    <div className="text-center text-4xl md:text-5xl font-semibold tracking-tight">YouTube Ads</div>
                </WorkLeft>
                <WorkRight progress={progress}>
                    <Image
                        src="/assets/works/workexample5.png"
                        width={840}
                        height={1620}
                        alt="youtube" 
                    />
                </WorkRight>
            </WorkContainer>
       )}>
        </Tile>
        <Tile 
        page={7} 
        renderContent={({ progress }) => (
            <WorkContainer>
                <WorkLeft progress={progress}>
                    <div className="text-center">We deleted</div>
                    <div className="text-center text-4xl md:text-5xl font-semibold tracking-tight">TikTok</div>
                </WorkLeft>
                <WorkRight progress={progress}>
                    <Image
                        src="/assets/works/workexample6.png"
                        width={840}
                        height={1620}
                        alt="tiktok" 
                    />
                </WorkRight>
            </WorkContainer>
       )}>
        </Tile>
    </TileContent>
</TileWrapper>
)

export default Works