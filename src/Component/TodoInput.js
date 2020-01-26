import React, { Component } from 'react'

class TodoInput extends Component {
    render() {
        return (
            <div className="card card-body my-3">
                <form>
                    <div className="input-group">
                        {/* 蓝色的书本按钮 */}
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fas fa-book"></i>
                            </div>
                        </div>

                        <input type="text" className="form-control" placeholder="add a item"/>
                    </div>
                    <button className="btn btn-block btn-primary mt-3">add item</button>
                </form>
            </div>
        )
    }
}

export default TodoInput
