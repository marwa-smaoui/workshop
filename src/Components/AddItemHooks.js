import React, { useState } from "react";
import ListTasks from "./ListTasks";

const AddItemHooks = () => {
  const [todoList, setTodoList] = useState([]);
  const [task, setTask] = useState("");
  const handleChange=(e)=>{
      setTask(e.target.value)
  }
  const addItem=()=>{
      if(task!==''){
      setTodoList([...todoList,{task:task,id:Math.random(),isDone:false}]);
      setTask('')
      }else{
          alert('please enter a valid task')
      }
  }
  const completeTask=(id)=>{
      setTodoList(todoList.map(el=>el.id===id?{...el,isDone:!el.isDone}:el))
  }
  const deleteTask=(id)=>{
      setTodoList(todoList.filter(el=>el.id!==id))
  }
  return (
    <div>
      <div>
        <h1>List of what we should do</h1>
        <input
          type="text"
          placeholder="enter a new task"
          value={task}
          onChange={handleChange}
        />
        <button onClick={addItem}>Add</button>
      </div>
      <ListTasks
        todoList={todoList}
        completeTask={completeTask}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default AddItemHooks;
