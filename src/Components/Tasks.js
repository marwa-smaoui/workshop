import React from "react";

const Tasks = ({ item,completeTask,deleteTask }) => {
  return (
    <div>
      <button onClick={()=>completeTask(item.id)}>{item.isDone?'Undo':'Complete'}</button>
      <button onClick={()=>deleteTask(item.id)}>Delete</button>
      <span className={item.isDone&&'lineTh'}>{item.task}</span>
    </div>
  );
};

export default Tasks;
