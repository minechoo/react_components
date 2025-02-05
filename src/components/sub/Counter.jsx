import { useState } from "react"

export const Counter = () => {
    const [value, setValue] = useState(0)

    const onIncrease = () => {
        setValue(value + 1)
    }

    const onDecrease = () => {
        setValue(value - 1)
    }

    return (
        <>
        <br/><br/>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
        <p>{value}</p>
        </>
    )
}