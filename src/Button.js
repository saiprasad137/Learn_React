import { useState } from "react"

export default function Button ({whichButton}) {
    

    const [count , setCount ] = useState(0)

    const handleOnClick = () => {
        setCount(count + 1)
    }

    return (
        <>
            <button onClick={handleOnClick}>
                {whichButton} button Clicked {count} times
            </button>
        </>
    )
}