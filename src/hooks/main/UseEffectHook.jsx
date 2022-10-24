import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const handleEvent = () => {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener("resize", handleEvent)
        return () =>
            window.removeEventListener("resize", handleEvent)
    }
    )

    return (
        <div>{windowWidth}</div>
    )
}

export default UseEffectHook
