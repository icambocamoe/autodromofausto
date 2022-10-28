import React, { Component } from 'react'
import car from '../assets/racing-car.png'
import Buton from './Buton';

export default class Car extends Component {
  constructor(props) {
    super(props);
  
  }
  
  render() {
    
    return (

      <>
        <img src={car} alt="auto"
        style={{
          position: "absolute",
          top: `${this.props.top}px`,
          left: `${this.props.left}px`,
        }}>
        </img>
        
      </>
      
    )
  }
}
