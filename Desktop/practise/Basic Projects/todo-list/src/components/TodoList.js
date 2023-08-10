import React from 'react'
import '../App.css'

const TodoList = (props) => {
      
  return (
    <div>
      <h3>Today's List</h3>
      {
        props.data.map((element, index)=>{
            return(
                
                <div className='Todo' key={index}>
                    <h5>{element.todo}</h5>

                    <button className='btn_edit' onClick={()=>{props.editTodo()}}>
                    <i className="fa-regular fa-pen-to-square"></i>
                    </button>
                    
                    <button className='btn' onClick={()=>{props.deleteHandler(index)}}>
                <i className="fa-solid fa-trash"></i>
                </button>
                </div>
                
                
            )
        })
      }
    </div>
  )
}

export default TodoList