import React, { Component } from 'react'
import "./TourItem.scss";

export default class TourItem extends Component {
    state={
        showInfo:false,
    }
    handleInfo=()=>{
        this.setState({
            showInfo:!this.state.showInfo
        })
    }
    render() {
        const {city,img,name,info,id}=this.props.tour;
        const {removeTour}=this.props;
        return (
            <article className="tour">
                <h1>hahahah</h1>
                <div className="img-container">
                    <img src={img} alt=""/>
                    <span className="close-btn" onClick={()=>{removeTour(id)}}>
                        <i className="fas fa-window-close"></i>
                    </span>
                </div>
                <div className="tour-info">
                    <h3>{city}</h3>
                    <h4>{name}</h4>
                    <h5>info <span onClick={this.handleInfo}><i className="fas fa-caret-square-down"></i></span></h5>
                    {/* 如果第一个为true那么第二个就显示 */}
                    {this.state.showInfo&&<p>{info}</p>}
                </div>
            </article>
        )
    }
}
