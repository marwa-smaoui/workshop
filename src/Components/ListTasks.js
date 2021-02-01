import React from 'react'
import Tasks from './Tasks'

const ListTasks = ({todoList,completeTask,deleteTask}) => {
    return (
        <div>
            {todoList.map(item=><Tasks item={item} key={item.id} completeTask={completeTask} deleteTask={deleteTask} />)}
        </div>
    )
}

export default ListTasks
