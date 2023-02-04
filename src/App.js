
import {useState, useMemo} from 'react';
import './App.css';

function App() {
  const [num, setNum] = useState(0);
  const [count, setCount] = useState(0);

  const synnShoke = (num) => {
    console.log('s ynn shoke dk function pl');
    return num;
  }

  const result = useMemo(()=>synnShoke(num),[num])
  
  return (
    <div className="App">
      <main>
        <p>result - {result}</p>
        <p>count - {count}</p>
        <button onClick={()=>setNum(n=>n+1)}>Update Num</button>
        <button onClick={()=>setCount(c=>c+1)}>Update Count</button>
      </main>
    </div>
  );
}

export default App;
