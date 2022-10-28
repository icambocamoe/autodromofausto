import React, { Component, createRef } from 'react'
import Car from './Car';

export default class Buton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      xoffset: [0,0,0,0,0],
    };
    
    
  }
  
  handleButtonClicked = (e) => {
    
    const t = setInterval(()=>{

      //funcion de meta
      for(let [index,x] of this.state.xoffset.entries()){
        if(Number(x)>=1200){
          clearInterval(this.state.t)
          
          console.log(index,x)
          alert("ganador "+index)
        }
      }
       
      //funcion de mapeo de propiedad del dezplazamiento
      this.setState(
      { 
        xoffset: this.state.xoffset.map(item => item + Math.floor(Math.random() * (10 - 1 + 1)) + 1), 
      });   
    }, 30)
    this.setState({t})//guardamos la propiedad del setinterval
    
     
    }
    //funcion para detener
    stopInterval= (e) =>{
      clearInterval(this.state.t)
      
    }
    //funcion para resetear
    resetInterval(){
      this.setState(
        {
           xoffset: [0,0,0,0,0],
        });
    }

  render(e) {
    return (
      <>

      <div>
      
   
      <Car carro = "0" top = "0" left = {this.state.xoffset[0]}/>
      <Car carro = "1" top = "50" left = {this.state.xoffset[1]}/>
      <Car carro = "2" top = "100" left = {this.state.xoffset[2]}/>
      <Car carro = "3" top = "150" left = {this.state.xoffset[3]}/>
      <Car carro = "4" top = "200" left = {this.state.xoffset[4]}/>
      
     
      </div>
      <div style={{top: "300px", position: "absolute"}}>
        <button  onClick={this.handleButtonClicked.bind(this)}>Start Race</button>
        <button onClick={this.stopInterval.bind(this)}>Stop Race</button>
        <button onClick={this.resetInterval.bind(this)}>Reset Race</button>
       
      </div>

        
      
      </>
      
      
    )
  }
}
