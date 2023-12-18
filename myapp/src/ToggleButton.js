import React,{useState} from "react";


function ToggleButton(){
    const [isOn, setIsOn] = useState(false);
   
    const toggle = () => {
        setIsOn(!isOn);
    }

    return (
        <div>
            <p>버튼상태 : {isOn ? '상태가 트루입니다.' : '상태가 거짓입니다.'}</p>
            <button onClick={toggle}>버튼상태변경</button>
        </div>
    )
}



export default ToggleButton;