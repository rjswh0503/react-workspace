import React, { useState } from 'react';

function AddCount() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    

    return (
       
        <div>
        <button onClick={count}>숫자</button>
            <h1>숫자: {Count}</h1>
        </div>
    )
}

function Count() {
    return (
        <div>
            <AddCount />
        </div>
    )
}

export default Count;

