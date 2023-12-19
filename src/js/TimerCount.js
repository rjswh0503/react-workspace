import React, {useState,useEffect} from "react";


function TimerCount(){
    const [count, setCount] = useState(0);
   

    //위 버튼 클릭과 const increament로 작성해준 메서드는 동일한 효능을 지닌다.
    const increment = () => {
        setCount(count + 1);
    }

    const updateCount = () => {
        setCount(count - 1);
    }

    const Counts = () => {
        setCount(0);
    }

    return(
        <div>
            <p> 숫자 : {count}</p>
            <button onClick={increment}>
                증가
            </button>
            <button onClick={()=> setCount (count + 1)}>
                증가
            </button>
            <button onClick={updateCount}>
                감소
            </button>
            <button onClick={Counts}>
                초기화
            </button>
        </div>

    )
}



export default TimerCount;