 import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';

function App() {
  const [timer,setTimer] = useState(0)
  let setInter = null;


  useEffect(()=>{
    
  },[])

  const start=()=>{
    TimerControl();
  }
  const stop=()=>{ 
  }

  const TimerControl = ()=>{
    setInter = setInterval(()=>{
      setTimer(timer+1);
    },1000);
  }
  return (
    <div className="App">
      <p>{timer}</p>
     <input type="button" value="start" onClick={start}/> 
     <input type="button" value="Stop" onClick={stop}/> 

    </div>
  );
}

export default App;
