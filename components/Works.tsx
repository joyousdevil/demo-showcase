// @ts-nocheck
import React from 'react'
import { Tile, TileBackground, TileContent, TileWrapper } from './Tile'
import { WorkBackground, WorkContainer, WorkLeft, WorkRight } from './Work'
import Image from 'next/image'

const Works = () => (
<TileWrapper numOfPages={3}>
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
                        layout="responsive"
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
        renderContent={({progress}) => (
            <WorkContainer>
                <WorkLeft progress={progress}>
                    <div className="text-center">We redefined</div>
                    <div className="text-center text-4xl md:text-5xl font-semibold tracking-tight">iOS Navigation.</div>
                </WorkLeft>
                <WorkRight progress={progress}>
                    <Image
                        src="/assets/works/workexample1.png"
                        layout="responsive"
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
        renderContent={({progress}) => (
            <WorkContainer>
                <WorkLeft progress={progress}>
                    <div className="text-center">We improved</div>
                    <div className="text-center text-4xl md:text-5xl font-semibold tracking-tight">iOS Camera&apos;s Image Processing</div>
                </WorkLeft>
                <WorkRight progress={progress}>
                    <Image
                        src="/assets/works/workexample2.png"
                        layout="responsive"
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
        renderContent={({progress}) => (
            <WorkContainer>
                <WorkLeft progress={progress}>
                    <div className="text-center">We redid</div>
                    <div className="text-center text-4xl md:text-5xl font-semibold tracking-tight">iOS Photos</div>
                </WorkLeft>
                <WorkRight progress={progress}>
                    <Image
                        src="/assets/works/workexample3.png"
                        layout="responsive"
                        width={840}
                        height={1620}
                        alt="photos" 
                    />
                </WorkRight>
            </WorkContainer>
       )}>
        </Tile>
    </TileContent>
</TileWrapper>
)

export default Works