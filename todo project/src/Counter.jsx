import { useState } from "react";


function init(){
    console.log("init function called");
    return Math.random();
}

export default function Counter (){

      let [count , setCount] = useState(init());
 

      function  incCount () {
        setCount(count + 1);
        console.log(count);
      }

    return (
        <>
        <p><b>Count = {count}</b></p>
        <button onClick={incCount} >Increment Count </button>
        </>
    );
}