import { useState } from "react"

// const Timer : React.FC = () => {
//     const [seconds, setSeconds] = useState<number>(0);

//     return (
//         <div>
//             <h2>타이머 : {seconds}초</h2>
//             <button onClick={
//                 function() //익명 함수
//                 {
//                     setInterval(() => {
//                         setSeconds((prev) => prev + 1); // 이전 초에다가 가산누적
//                     }, 1000) //1초 마다 실행
//                 }
//             }>시작</button>
//         </div>
//     )
// }

const Clock : React.FC = () => {
    const [time, setTime] = useState(new Date());

    setInterval(() => {
        setTime(new Date());
    }, 1000)

    return (
        <div>
            현재 시간 : {time.toLocaleDateString()} {time.toLocaleTimeString()}
        </div>
    )
}
export default Clock;