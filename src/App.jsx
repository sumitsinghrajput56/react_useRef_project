import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [count,setCount]=useState(0);

  var val=useRef(0);

  var btnRef=useRef();

  useEffect(()=>{
    console.log("mai render ho gya");
  });

  function HandleIncrementClick()
  {
    val.current=val.current+1;

    console.log(val);
    
    setCount(count+1);
  }

  function HandleColorChange()
  {
    btnRef.current.style.backgroundColor='red';

    //use toggle

    // btnRef.current.style.backgroundColor=='red'?
    // btnRef.current.style.backgroundColor="":btnRef.current.style.backgroundColor="red";   
  }
  return (
    <>
      <button onClick={HandleIncrementClick} ref={btnRef}>Increment</button>
      <p>count:{count}</p>
      <button onClick={HandleColorChange}>Chnage Color</button>

    </>
  )
}

export default App
