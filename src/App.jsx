import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [count,setCount]=useState(0);

  var val=useRef(0);

  useEffect(()=>{
    console.log("mai render ho gya");
  });

  function HandleIncrementClick()
  {
    val.current=val.current+1;

    console.log(val);
    
    setCount(count+1);
  }
  return (
    <>
      <button onClick={HandleIncrementClick}>Increment</button>
      <p>count:{count}</p>

    </>
  )
}

export default App
