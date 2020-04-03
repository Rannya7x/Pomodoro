import React, { Component } from 'react';


const leftZero = (val)=>{
  if (val < 10) return '0'+`${val}`
  return val
}


class Timer extends Component {
    constructor(){
        super()

        this.state = {
            count: 1,
            endCount: 1500,
            timer: "25:00",
            ciclos: 0    
        }
        
        this.start = this.start.bind(this)
        this.stop = this.stop.bind(this)
        this.reset = this.reset.bind(this)
      
    }
  render() {
    return (
        <div className="App">
          <h1>Ciclo Pomodoro</h1>
          <h2>
            {this.state.timer}
          </h2>
          <button onClick={this.start}>Start</button>
          <button onClick={this.stop}>Stop</button>
          <button onClick={this.reset}>Reset</button>

          <h1>Intervalo</h1>
          <h2>
            
          </h2>
          <button>Start</button>
          <button>Stop</button>
          <button>Reset</button>
        </div>
    )
  }
  start(){
    
    this.interval = setInterval(()=>{
      if (this.state.count === this.state.endCount +1) {
        clearInterval(this.interval)
        this.setState({
          count: 0
        })
      } else {      
        this.setState({
          count: this.state.count + 1,
          timer: this.conversor( this.state.endCount - this.state.count)  
      })
      }
      
    }, 1000);
    

  }
  stop(){
    clearInterval(this.interval)   
  }
  reset(){
    clearInterval(this.interval)
    this.setState({
      count: 0,
      timer: '00:00'
    })
  }
  
  conversor(seg){
    var minutos = Math.floor(seg / 60)
    var segundos = seg % 60
    
    return leftZero(minutos) + ':' + leftZero(segundos)
    
  }
}

export default Timer;
