import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count,setCount]=useState(0);

  var val=1;

  useEffect(()=>{
    console.log("mai render ho gya");
  });

  function HandleIncrementClick()
  {
    val=val+1;

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
