import { useState } from "react";




export default function Counter() {
    let [count, setCount] = useState(0);
    let  CountInc = () => {
        
        setCount(count + 1);
        console.log(count);
    
    }
    
    return (
        <div>
            <h1>Welcome to State</h1>
            <h3>Count = {count}</h3>
            <button onClick={CountInc}>Increse Count</button>
        </div>
    );
}