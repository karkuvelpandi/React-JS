import React, { useState } from 'react'

const App = () => {
  let[resultflag,setResultflag]=useState(null)
  let[input,setInput]=useState(null)
  let isPrime=(number)=>{
      if(number<=1){
        return false
      }
      for(let i=2;i<=Math.sqrt(number);i++){
            if(number%i===0){
              return false
            }
      }
      return true
  }
  let inputNumber=()=>{
     let input=prompt()
     setInput(Number(input))
     let flag=isPrime(input)
     console.log(flag);
     setResultflag(flag) 
  }
  return <>
  <div>
    {/* <pre>{JSON.stringify(resultflag)}</pre> */}
    <h1>{input}</h1>
    <h3 style={resultflag?{color:"green"}:{color:"red"}}>{resultflag?"Yes its a prime number":"No its not a prime number"}</h3>
    <button onClick={inputNumber}>Input</button>
  </div>
  </>
}

export default App