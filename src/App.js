import React from 'react';
import TodoInput from "./Component/TodoInput"
import TodoList from "./Component/TodoList"

import "bootstrap/dist/css/bootstrap.min.css"
import uuid from "uuid";
import { Component } from 'react';



class App extends Component{
  state={
    //收集所有数据，
    items:[],
    //生成唯一id
    id:uuid(),
    //input里面每变一次就把变的值给item，然后input就显示item。也就是一边输入一边显示。
    item:"",
    editItem:false,
  }

  handleChange=(e)=>{
    this.setState({
      item: e.target.value,
    })
  }
  handleSubmit=(e)=>{
    //有onSubmit的form 点击submit之后就会刷新页面，为了防止页面被刷新。
    e.preventDefault();
    const newItem={
      id: this.state.id,
      title: this.state.item,
    }
    console.log(newItem);
    

    const updateItems=[...this.state.items,newItem];
    this.setState({
      items:updateItems,
      item:"",
      id:uuid(),
      editItem:false,
    })
  }
  clearList=(e)=>{
    this.setState({
      items:[],
    })
  }
  handleDelete=(id)=>{
    //不能写成这样 filter(item=>item.id!==id)
    const filterItems=this.state.items.filter(item=>item.id!==id)
    this.setState({
      items:filterItems,
    })

  }
  handleEdit=(id)=>{
    //点击笔之后，点击的那一条不见了。
    const filterItems=this.state.items.filter(item=>item.id!==id)
    //选出点击的那一个
    const selectedItem=this.state.items.find(item=>item.id===id)
    console.log(selectedItem);
    
    this.setState({
      items:filterItems,
      item:selectedItem.title,
      //变成编辑模式的flag
      editItem:true,
      //记住点击的记录的id
      id:id
    })
    //
  }
  render(){
    return(
      <div className="container">
           <div className="row">
             <div className="col-10 mx-auto col-md-8 mt-4">
               <h3 className="text-capitalze text-center">Todo Input</h3>
             </div>
           </div>
           <TodoInput 
           item={this.state.item} 
           handleChange={this.handleChange}
           handleSubmit={this.handleSubmit}
           editItem={this.state.editItem}>
           </TodoInput>
           <TodoList 
                    items={this.state.items} 
                    clearList={this.clearList} 
                    handleDelete={this.handleDelete}
                    handleEdit={this.handleEdit}></TodoList>
        </div>
    )
  }

}

export default App
