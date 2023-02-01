import {useState, useEffect, useRef} from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState(0);
  const timerRef = useRef(0);

  const startHandler = () => {
    if(timerRef.current) return;
    timerRef.current = setInterval(()=> setValue(c=>c+1), 1000);
    console.log(timerRef.current)
  }

  const stopHandler = () => {
    clearInterval(timerRef.current);
    timerRef.current = 0;
  }

  const resetHandler = () => {
    clearInterval(timerRef.current);
    timerRef.current = 0;
    setValue(0);
  }

  useEffect(()=>{
    return () => clearInterval(timerRef.current)
  },[])

  return (
    <div className="App">
      <h1>Stop Watch</h1>
      <h3>{value}</h3>
      <div className="btn-container">
        <button onClick={startHandler}>start</button>
        <button onClick={stopHandler}>stop</button>
        <button onClick={resetHandler}>reset</button>
      </div>
    </div>
  );
  
}

export default App;

