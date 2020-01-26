import React, { Component } from 'react'
// import TodoItem from "./TodoItem"  一定要写成./TodoItem
import TodoItem from "./TodoItem"
class TodoList extends Component {
    render() {
        return (
            <div>
                <ul className="list-group my-5">
                    <h3 className="text-capitalize text-center">
                        to do list
                    </h3>
                    <TodoItem></TodoItem>
                    <button className="btn btn-danger btn-block text-capitalize mt-5">
                        clear list
                    </button>
                </ul>
            </div>
        )
    }
}

export default TodoList
