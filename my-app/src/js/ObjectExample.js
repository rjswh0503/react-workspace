import React, {useState} from "react";




function ObjectExample(){
    const [Person, setPerson] = useState({name:'kh',age:20});

    const updateAge = () => {
        //...person : 현재 person 객체 속성을 펄쳐서 
        // 새로운 객체로 만들어주는 역할
        // 객체 속성들은 그대로 복사가 돼서 만들어짐
        // ...person, age , 복사된 객체에서
        //값이 변화하거나 추가해야할 내용이 있으면
        // , 뒤에 값과 속성을 추가함 


        //age : person.age + 1 age 속성에
        // person.age + 1 한 값으로 age 값을 저장하겠다 의미 
    


        setPerson({...Person, age : Person.age + 1});
    }
    return (
        <div>
            <p>Name:{Person.name}</p>
            <p>Age: {Person.age}</p>
            <button onClick={updateAge}>나이올리기 버튼</button>
        </div>

    )


}




export default ObjectExample;