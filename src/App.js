import React from 'react';
import TodoInput from "./Component/TodoInput"
import TodoList from "./Component/TodoList"

//
import "bootstrap/dist/css/bootstrap.min.css"
import uuid from "uuid";
const App=()=>{
  return(
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalze text-center">Todo Input</h3>
          </div>
        </div>
        <TodoInput></TodoInput>
        <TodoList></TodoList>
      </div>
  );
};




export default App;
