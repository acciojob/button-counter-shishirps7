import React,{useState} from "react";
const Counter = () => {
 let [counter,setCounter]=useState(0)
 function update(e){
  setCounter(counter+1)
 }
  return (
    <div>
        <p>Button clicked {counter} times</p>
        <button onClick={update}>Click me</button>
    </div>
  )
}

export default Counter 