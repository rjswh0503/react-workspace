import React,{useState} from "react";


function CountNumber() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }





    return (

        <div>
            <button onClick={count}>숫자</button>
            <h1>숫자 : {Count}</h1>
        </div>

    )
}

function Count() {
    return (
        <div>
            <CountNumber />
        </div>
    )
}

export default Count;