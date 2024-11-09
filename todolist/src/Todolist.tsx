import React, { useState } from "react";

type Todo = {
    id : number;
    text : string;
    isChecked : boolean;
};

const Todolist : React.FC = () => {
    const title : string = "오늘 할 일";

    //구조 분해 할당
    const [todos, setTodos] = useState<Todo[]>([
        {id : 1, text : '공부하기', isChecked : false},
        {id : 2, text : '잠자기', isChecked : false},
        {id : 3, text : '미팅하기', isChecked : false}
    ]);

    const handleCheckedChange = (itemId : number) => {
        setTodos((prevItems) => 
            prevItems.map((item) =>
                item.id === itemId ? {...item, isChecked : !item.isChecked } : item
            )//체크박스를 클릭하면 해당 항목의 isChecked값이 true, false로 변경되고 아니라면 기존의 항목 item이 반환됨
        )
    }
    
    return(
        <div>
            <h1>{title}</h1>
            <p></p>
            <div className="container">
                <div className="board">
                    <ul>
                        {
                            todos.map((todo, index) => (
                                <li key={todo.id}>
                                    <input type = "checkbox"
                                    onChange={() => {
                                        handleCheckedChange(todo.id);

                                    }}></input>
                                    <span>
                                        {
                                            todo.isChecked ? 
                                            <del>{todo.text}</del>
                                            : <span>{todo.text}</span>
                                        }
                                    </span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>

    )
};

export default Todolist;