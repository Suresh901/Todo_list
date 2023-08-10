import React from 'react'
import '../App.css';
import  { useState } from 'react';
import TodoList from './TodoList';

const Todo = () => {
    const [todo, setTodo] = useState("");
    const [data,setData]= useState([]);

    const addTodo = ()=>{
        setData([...data, {todo}])
        setTodo("")
    }
    const deleteHandler = (index) => {
        let arr= [...data]
        arr.splice(index, 1)
        setData([...arr])
    }

    // const editTodo = ()=> {

    // }

  return (
               // design (jsx)
    <div className='form'>
        <h2 className='heading'>ToDo List</h2>

        <input type="text" placeholder='Enter the task' 
        value= {todo}
        onChange={(event)=>{setTodo(event.target.value)}}/>

        <button onClick={addTodo}>
        <i className="fa-solid fa-plus "></i>
        </button>

        
      <TodoList data={data}  todo = {todo} deleteHandler={deleteHandler} />

    </div>
    
  )
}

export default Todo