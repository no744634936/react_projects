import React, { Component } from 'react'
import './App.scss';
import Navbar from "./components/Navbar/Navbar.js"

//默认import TourList文件夹里的index.js 文件
import TourList from "./components/TourList"

class App extends Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <TourList></TourList>
            </div>
        )
    }
}

export default App


