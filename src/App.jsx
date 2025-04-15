import React, { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'

import Hello from './Hello';
import Timer from './Timer';
import TimeList from './TimeList';
import { TestContext } from './testContext';


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
  const [title,setTitle] = useState("Cronometro");
  const [isLight,setIsLight] = useState(false);
  const [timeArr,setTimeArr]=useState([]);


  useEffect(()=>{
    console.log("useEffect");
  },[isLight])

  const handleSetLight = ()=>{
    setIsLight(!isLight);
  }
  return(
    <TestContext.Provider value={{
      timeArr,
      setTimeArr
    }}>
    <div className='main' style={{background: isLight ? "rgb(158, 158, 158)" : "black"}}>
        <Hello title ={title}/>
        <Timer 
        isLight={isLight} 
        handleSetLight ={handleSetLight} 
        timeArr ={timeArr} 
        setTimeArr={setTimeArr}
        />
         <TimeList/>
    </div>
    </TestContext.Provider>
  )
}

export default App