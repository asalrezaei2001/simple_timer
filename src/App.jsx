import React, { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'

import Hello from './Hello';
import Timer from './Timer';


// class App extends React.Component{
//   constructor(){
//     super();
//     this.state={
//       title : "Simple Timer"
//     }
//   }

//   handleSetTitle =()=>{
//     this.setState({
//       title: "welcome"
//     })
//   }

//   render(){
//     return(
//       <div className='main'>
//         <Hello title ={this.state.title}/>
//         <Timer handleSetTitle = {this.handleSetTitle}/>
//       </div>
//     )
//   }
// }



const App =()=>{
  const [title,setTitle] = useState("Simple Timer")
  const [isLight,setIsLight] = useState(false);


  useEffect(()=>{
    console.log("useEffect");
  },[isLight])

  const handleSetLight = ()=>{
    setIsLight(!isLight);
  }
  return(
    <div className='main' style={{background: isLight ? "white" : "black"}}>
        <Hello title ={title}/>
        <Timer isLight={isLight} handleSetLight ={handleSetLight}/>
    </div>
  )
}

export default App