import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TimeList from './TimeList';
import { TestContext } from './testContext';



var interval;

class Timer extends React.Component{
  constructor(){
    super();
    this.state ={
      hour :0,
      minute:0,
      second:0,
      isStart:false
    }
  }


  static contextType = TestContext;

  startInterval = () => {
    if(this.state.isStart == false){
      this.setState({
        isStart:true
      })

      interval = setInterval(()=>{
        this.setState({
          second : this.state.second + 1
        })
        if(this.state.second == 60){
          this.setState({
            second :0,
            minute : this.state.minute + 1
          })
        }
        if(this.state.minute == 60){
          this.setState({
            minute :0,
            hour : this.state.hour + 1
          })
        }
      },1000)
    }
  }

  stopInterval = ()=>{ 
    this.setState({
      isStart:false
    })
    clearInterval(interval);
  } 


  resetInterval = ()=>{
    this.stopInterval();
    this.setState({
      hour:0,
      minute:0,
      second:0
    })
  }


  handleSaveTime =()=>{
    let newTime = document.querySelector('.timer').innerHTML;
    this.context.setTimeArr([...this.context.timeArr , newTime]);
  }


  render(){
    let h = this.state.hour;
    let m = this.state.minute;
    let s = this.state.second;
    
    return(
      <>
   <h2 className='timer' onClick={this.handleSaveTime}>
      {`${h > 9 ? h : "0"+h} : ${m >9 ? m : "0"+m} : ${s > 9 ? s : "0" + s}`}
   </h2>
      <div className="button_box">
        <button className='action_button start_button' onClick={this.startInterval}>start</button>
        <button className='action_button stop_button' onClick={this.stopInterval}>stop</button>
        <button className='action_button reset_button' onClick={this.resetInterval}>reset</button>
        <button className='action_button change_bg_button' 
        onClick={this.props.handleSetLight}
        style={ 
          {
           background : this.props.isLight ? "black" : "rgb(158, 158, 158)" ,
           color : this.props.isLight ? "rgb(158, 158, 158)" : "black"
        }
        }
        >
          {this.props.isLight ? "dark" : "light"}
        </button>
      </div>
      </>
     
    )
  }
}


export default Timer;
