import {useState} from "react";

function Counter(){
    const [count, setCount] = useState(0);

    const increment = () =>{
        if(count < 100){
            setCount(count+1);
        }
    }

    const decrement = ()=>{
        if(count > 0){
            setCount(count-1);
        }
    }

    const reset = () =>{
        setCount(0);
    }

    return (
        <div className="counter-container">
            <h1 className="counter-value">Counter: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement} style={{marginLeft: "10px"}}>Decrement</button>
            <button onClick={reset} style={{marginLeft: "10px"}}>Reset</button>
        </div>
    );
}

export default Counter;