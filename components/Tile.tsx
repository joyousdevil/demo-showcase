import React, { useRef, useContext } from 'react'
import { ScrollContext } from '../utils/scroll-observer'

interface WrapperProps {
    numOfPages: number
}

interface TileContextValue {
    numOfPages: number
    currentPage: number
}

export const TileContext = React.createContext<TileContextValue> ({
    numOfPages: 0,
    currentPage: 0
})

export const TileWrapper: React.FC<WrapperProps> = ({
// @ts-ignore
    children,
    numOfPages
}) => {
    const { scrollY } = useContext(ScrollContext)
    const refContainer = useRef<HTMLDivElement>(null)

    let currentPage = 0

    const { current: elContainer }  = refContainer
    if (elContainer) {
        const { clientHeight, offsetTop } = elContainer
        const screenH = window.innerHeight
        const halfH = screenH / 2
        const percentY = 
        Math.min(
            clientHeight + halfH,
            Math.max(-screenH, scrollY - offsetTop) + halfH
        ) / clientHeight
        currentPage = percentY * numOfPages
    }

    return (
        <TileContext.Provider value={{numOfPages, currentPage}}>
        <div
        ref={refContainer} 
        className="relative bg-neutral-900 text-stone-100" 
        style={{
            height: numOfPages * 100 + "vh"
        }}>
            {children}
        </div>
        </TileContext.Provider>
    )
}

// @ts-ignore
export const TileBackground: React.FC = ({ children }) => (
    <div className="absolute h-full w-full">{children}</div>
)

// @ts-ignore
export const TileContent: React.FC = ({ children }) => (
    <div className="sticky top-0 h-screen overflow-hidden">{children}</div>
)

interface Props {
    page: number
    renderContent: (props: {progress: number}) => any
}

export const Tile: React.FC<Props> = ({ page, renderContent }) => {
    const { currentPage, numOfPages } = useContext(TileContext)
    const progress = Math.max(0, currentPage - page)
    const refContainer = useRef<HTMLDivElement>(null)

    let opacity = Math.min(1, Math.max(0, progress * 4))
    if (progress > 0.85 && page < numOfPages - 1) {
        opacity = Math.max(0, (1.0 - progress) * 4)
    }

    return (
        <div className="absolute top-0 w-full"
        style={{
            pointerEvents: progress >= 0 || progress >= 1 ? 'none' : undefined,
            opacity
        }}>
            {renderContent({ progress })}
        </div>
    )
}