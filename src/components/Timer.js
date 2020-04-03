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
            endCount: 5,
            timer: "25:00",
            ciclos: 0,   
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

          <audio className="sound">
            <source src="https://api.coderrocketfuel.com/assets/pomodoro-times-up.mp3"></source>
          </audio>
        </div>
    )
  }
  start(){
    
    this.interval = setInterval(()=>{
      if (this.state.count === this.state.endCount +1) {
        this.playSound()
        clearInterval(this.interval)        
        this.setState({
          count: 1
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
      count: 1,
      timer: '25:00'
    })
  }
  
  conversor(seg){
    var minutos = Math.floor(seg / 60)
    var segundos = seg % 60
    
    return leftZero(minutos) + ':' + leftZero(segundos)
    
  }
   
  playSound(){
    const sound = document.getElementsByClassName("sound")[0]
    sound.play()  
  }
}

export default Timer;
