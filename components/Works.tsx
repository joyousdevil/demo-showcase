import React from 'react'
import { Tile, TileBackground, TileContent, TileWrapper } from './Tile'

const Works = () => <TileWrapper numOfPages={3}>
    <TileBackground></TileBackground>
    <TileContent><Tile page={0} renderContent={({progress}) => (
        <span>Foo{progress}</span>
    )}></Tile></TileContent>
    <TileContent>Bar</TileContent>
    <TileContent>Foo</TileContent>
</TileWrapper>

export default Works