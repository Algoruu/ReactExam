import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1 className='test'>Hello, 리액트!!!</h1>
      <p>반갑습니다.</p>
    </div>
  );
}

// function App(){
//   return React.createElement("div", null, "Hello", "리액트!!!",
//     React.createElement("p", null, "반갑습니다.") 
//   );
// } // 이러한 기존의 자바스크립트 문법을 명확하게 표현하기 위해 만들어진게 리액트의 jsx(위의 코드)

export default App;
