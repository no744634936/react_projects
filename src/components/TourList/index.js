import React, { Component } from 'react'
import "./TourList.scss";
import TourItem from "../Tour/TourItem"
import {tourData} from "../../tourData"

//App.js里面导入时，默认到导入文件夹里的index.js文件，
//记得将class名从 index 改为TourList
export default class TourList extends Component {
    state={
        tours:tourData,
    }
    removeTour=(id)=>{
        console.log(id);
        
        const{tours}=this.state;
        const sortedTours=tours.filter(tour=>tour.id!==id);
        console.log(sortedTours);
        
        this.setState({
            tours:sortedTours
        })
    }
    render() {
        console.log(this.state.tours);
        const {tours}=this.state;
        return (
            <div className="tourlist">
                {
                    tours.map(tour=>{
                        return(<TourItem key={tour.id} tour={tour} removeTour={this.removeTour}></TourItem>)
                    })
                }
            </div>
        )
    }
}
  