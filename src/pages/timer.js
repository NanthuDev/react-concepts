import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


let setInter = null;

function Timer() {
  const [timer,setTimer] = useState(0)
  const [start,setStop] = useState(false)
 


  useEffect(()=>{  

    if(start === true){
      console.log( "Started");
      TimerControl(); 
    }else{
      console.log( "Stopped / Not yet start"); 
      clearInterval(setInter); 
    }
    return ()=>clearInterval(setInter)
  },[ start])

  const startTimer=()=>{
  //  TimerControl();
    setStop(true);
  }
  const stop=()=>{ 
   // clearInterval(setInter);
    setStop(false)
  }

  const TimerControl = ()=>{
    setInter = setInterval(()=>{
      setTimer(timer=>timer+1);
    },1000);
  }
  return (
    <div className="App">
      <p>{timer}</p>
     <input type="button" value="start" onClick={startTimer}/> 
     <input type="button" value="Stop" onClick={stop}/> 

    </div>
  );
}

export default Timer;
