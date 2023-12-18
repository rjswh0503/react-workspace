import React,{useState} from "react";




function IndexExample(){
    const [inputText, setInputText] = useState('');
    const textChange = (asd) => {
        setInputText(asd.target.value);
    }



    return(
        <div>
            <input type="text" value={inputText} onChange={textChange}/>
            <p>내가 작성한 글{inputText}</p>

        </div>
    )
}




export default IndexExample;