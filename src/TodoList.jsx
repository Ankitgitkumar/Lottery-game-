import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export default function TodoList(){
    let styles={width:"350px", color:"yellow" ,marginRight:"40px"}
    let style={padding:"0.6rem", marginRight:"10px", borderRadius:"5px", color:"orange"}
    let [todos,setTodos] = useState([{task:"Sample Task",id:uuidv4(), isDone: false },]);
    let [newTodo,setNewTodo] = useState("");


    let deleteTodo = (id) => {
        setTodos((prevTodos) => todos.filter((prevTodo) => prevTodo.id != id));
    }


let MarkDoneAll = () =>{
setTodos((prevTodos)=>
prevTodos.map((todo) => {
return {
    ...todo,
    isDone:true,
};

}
));
};

let markAsDone = (id)=>{
    setTodos((prevTodos)=>
    prevTodos.map((todo)=>{
        if (todo.id == id){
            return{
                ...todo,
                isDone:true,
            };
        }else{
            return todo;
        }
    })

    );
};

    let addNewTask = () =>{
        setTodos((PrevTodos) => {
         return [...PrevTodos,{task: newTodo,id: uuidv4(),isDone:false}];
        
     } );
     setNewTodo("");
    };
    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };
    return (
        <div>
            <input  placeholder="Task to Add" value={newTodo} onChange={updateTodoValue} style={style}></input>
            <button onClick={addNewTask}>Add Task</button>
            <br></br>
            <br></br>
            <br></br>
            <hr></hr>
            <h4>Task Todo</h4>
            <ul style={styles}>
              {  todos.map((todo) => (
                <li key={todo.id}>
                  <span style= {todo.isDone ? {textDecorationLine : "line-through"} : {}} >{todo.task}</span>
                  &nbsp; &nbsp;  
                  <button onClick={ () => deleteTodo(todo.id)}>Delete</button> &nbsp;&nbsp;
                  <button onClick={()=> markAsDone(todo.id)}>Mark As Done</button>
                    </li>
               ))} 
            </ul>
                <br></br>
            <button onClick={MarkDoneAll}> Mark As Done</button>
        </div>
    );
}