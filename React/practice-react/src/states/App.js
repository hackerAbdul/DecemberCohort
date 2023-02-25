import React, {useState} from 'react'
import './index.css'



function App() {
 

    const [variable, setVariable] = useState(2)

    // [undefined, f()]

    function multiply(){
        setVariable(variable*2)
    }

    function divide(){
        setVariable(variable/2)
    }

    function minus(){
        setVariable(variable-1)
    }

    function add(){
        console.log(variable)
        setVariable(variable+1)
        return variable+1
    }

    // for (let i=0; i<100; i++)
    // //i = i + 1

  return (
    <div>
        <h1>{variable}</h1>
        <button onClick={divide}>Down</button>
        <button onClick={multiply}>Up</button>
        <button onClick={minus}>-1</button>
        <button onClick={add}>+1</button>
    </div>
  )
}

export default App
module.exports = add