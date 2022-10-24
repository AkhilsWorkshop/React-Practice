import React, { useState } from 'react'

const UseStateHook = () => {

    const [count, setCount] = useState(() => {
        console.log("Hello")
        return 4
    })

    const decrementCount = () => {
        setCount(prevCount => prevCount - 1)
    }
    const incrementCount = () => {
        setCount(prevCount => prevCount + 1)
    }
    return (
        <>
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button onClick={incrementCount}>+</button>
        </>
    )
}

export default UseStateHook
