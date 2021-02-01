import React, { Component } from "react";
import ListTasks from "./ListTasks";
class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      task: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      task: e.target.value,
    });
  };
  addItem = () => {
    if (this.state.task !== "") {
      this.setState({
        todoList: [
          ...this.state.todoList,
          { task: this.state.task, id: Math.random(), isDone: false },
        ],
        task: "",
      });
    } else {
      alert("please enter a valid task");
    }
  };

  completeTask = (id) => {
    this.setState({
      todoList: this.state.todoList.map((el) =>
        el.id === id ? { ...el, isDone: !el.isDone } : el
      ),
    });
  };
  deleteTask=(id)=>{
      this.setState({
          todoList:this.state.todoList.filter(el=>el.id!==id)
      })
  }
  render() {
    return (
      <div>
        <div>
          <h1>List of what we should do</h1>
          <input
            type="text"
            placeholder="enter a new task"
            value={this.state.task}
            onChange={this.handleChange}
          />
          <button onClick={this.addItem}>Add</button>
        </div>
        <ListTasks todoList={this.state.todoList} completeTask={this.completeTask} deleteTask={this.deleteTask} />
      </div>
    );
  }
}

export default AddTask;
