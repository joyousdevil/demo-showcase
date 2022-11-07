// @ts-nocheck
import React from 'react'
import { Tile, TileBackground, TileContent, TileWrapper } from './Tile'
import { WorkBackground, WorkContainer, WorkLeft, WorkRight } from './Work'

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
                    <div>We carried</div>
                </WorkLeft>
            </WorkContainer>
       )}>
        </Tile>
        <Tile 
        page={1} 
        renderContent={({progress}) => (
            <WorkContainer>
                <WorkLeft progress={progress}>
                    <div>We carried</div>
                </WorkLeft>
            </WorkContainer>     
       )}>
        </Tile>
        <Tile 
        page={2} 
        renderContent={({progress}) => (
            <WorkContainer>
                <WorkLeft progress={progress}>
                    <div>We carried</div>
                </WorkLeft>
            </WorkContainer>
       )}>
        </Tile>
    </TileContent>
</TileWrapper>
)

export default Works