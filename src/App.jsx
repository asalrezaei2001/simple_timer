import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Hello from './Hello';
import Timer from './Timer';


class App extends React.Component{
  constructor(){
    super();
    this.state={
      title : "Simple Timer"
    }
  }

  handleSetTitle =()=>{
    this.setState({
      title: "welcome"
    })
  }

  render(){
    return(
      <div className='main'>
        <Hello title ={this.state.title}/>
        <Timer handleSetTitle = {this.handleSetTitle}/>
      </div>
    )
  }
}


export default App