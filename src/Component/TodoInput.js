import React, { Component } from 'react'

class TodoInput extends Component {
    render() {
        const {item,handleChange,handleSubmit,editItem}=this.props
        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        {/* 蓝色的书本按钮 */}
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fas fa-book"></i>
                            </div>
                        </div>

                        <input 
                           type="text" 
                           className="form-control" 
                           placeholder="add a item" 
                           value={item}
                           onChange={handleChange}
                            />
                    
                    </div>
                    {/* 根据editItem不同改变文字跟颜色 */}
                    <button className={editItem?"btn btn-block btn-success mt-3":"btn btn-block btn-primary mt-3"}>
                            {editItem ?"edit item":"add itme"}
                    </button>
                </form>
            </div>
        )
    }
}

export default TodoInput
