import React, {useState,useEffect} from "react";
//컴포넌트 function 이나 class로 묶어 재사용할 수 있도록 만들어준 함수나 클래스 

function AnimalSound() {
    //script와 관련된 기능을 작성해줌
    const [animal,setAnimal] = useState('cat');


    useEffect(() =>{
        //console.log안에 함수나 변수명을 사용하고자 한다면  '',"" 대신에   ``사용

        //마운트될 때 바로 실행이 되는 부분
            console.log(`시작 : ${animal} : 야옹`)

        //언마운트될 때 실행되는 함수
        return() => {
            console.log(`종료`);
        };
        //[animal] animal 이라는 값이 변경될 때마다 useEffect 안에 작성한 내부 코드를 다시 실행
        //[] 추후에는 animal 하나만 들어있는 것이 아니라 여러 변수들이 들어있을 수 있으므로 배열로 묶어주는 것
    }, [animal]);   //animal이 바뀔때 마다 실행
   
    const handleSound = (newAnimal) => {
        setAnimal(newAnimal);
    } 

    return(
        <div>
            <h1>동물 소리 앱</h1>
            <p>{animal} 소리는</p>
            <button onClick={() => handleSound('cat')}>Cat</button>
            <button onClick={() => handleSound('dog')}>Dog</button>        
            <button onClick={() => handleSound('bird')}>Bird</button>
        </div>
    )

}



export default AnimalSound;