import { useState } from "react"

export default function Count() {
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        let newCount = count + 1;
        setCount(newCount);
    }

    const handleReduce = () => {
        const newCount = count - 1;
        setCount(newCount);
    }

    return (
        <div>
            <h3>Count : {count}</h3>
            <button onClick={handleAdd}>Increasing</button>
            <button onClick={handleReduce}>Decreasing</button>
        </div>
    )
}