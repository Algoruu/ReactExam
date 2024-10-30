import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let name = "리액트";
  const style = {
    backgroundColor : 'black',
    color : 'white',
    fontSize : '48px',
    fontWeight : 'bold',
    padding : '20px'
  }

  return (
    <div style = {
      {
        backgroundColor : 'black',
        color : 'white',
        fontSize : '48px',
        fontWeight : 'bold',
        padding : '20px'
      }
    }>
      <h1 style = {style}>Hello, 
      {
        name === '리액트' ? (<h1>YES</h1>): (<h1>NO</h1>) // name === '리액트' ? (<h1>YES</h1>): null도 가능
      }!!!</h1>
      <p>반갑습니다.</p>
    </div>
  );


  // const port = undefined;
  // return(
  //   <div>
  //     {
  //       port || '포트를 설정하지 않았습니다.' // port || '3000' 일반적으로 포트 설정할 때 사용
  //     }
  //   </div>
  // )

}



// function App(){
//   return React.createElement("div", null, "Hello", "리액트!!!",
//     React.createElement("p", null, "반갑습니다.") 
//   );
// } // 이러한 기존의 자바스크립트 문법을 명확하게 표현하기 위해 만들어진게 리액트의 jsx(위의 코드)

export default App;
