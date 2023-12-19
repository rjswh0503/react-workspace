import React,{useState} from "react";

function IndexExample() {
                                    //빈 글자를 나타낼때 '',"" 둘중 아무거나 사용해도 상관없음 
    const [inputText, setInputText] = useState('');
    
    // abcde.target.value
    //abcde : 사용자가 입력하거나 선택했을 때 어떤 값을 입력하고 선택했는지를 담기 위한 객체에 속함
    //target : 사용자 작성하거나 입력한 html 입력란을 나타냄
    //value : 사용자가 입력한 값을 나타냄 
    //target.value select 나 체크박스 button input등 어디서든 쓸 수 있음


    const handleChange = (e) => {
        setInputText(e.target.value);
    }

    return(
        <div>
            <input type="text" value={inputText} onChange={handleChange} />
            <p>내가 작성한 글 :{inputText}</p>
        </div>
    )
}








export default IndexExample;