// eslint-disable-next-line no-unused-vars
import React from "react"
import { useState } from "react"



function Calculator() {
  const [currentValue, setCurrentValue] = useState('0')
  const [podingOperation, setPedingOperatoion] = useState(null)
  const [pedingValue, setPedingValue] = useState(null)
  const [compliteOperation, setCompleteOperation] = useState('')

 
  const keypadNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
  const operations = ["+", "-", "*", "/"]
  return (
    <div className='flex flex-col items-center justify-center w-[200px] m-auto h-screen'>
      <div className='w-full h-[50px] border mb-3 text-right p-1'>3 + 4  = </div>
      <div className='w-full h-[50px] border mb-3 text-right p-1 overflow-auto'> 7</div>
      <div className='grid  grid-cols-4 gap-2'>
        <button className="grid p-4 font-bold bg-slate-400">AC</button>
        {keypadNumber.map((num) => (
          <button className="p-4 font-bold bg-slate-400" key={num}>{num}</button>
        ))}
        {operations.map((operation) => (
          <button className="p-4 font-bold bg-slate-400" key={operation}>{operation}</button>
        ))}
        <button className="grid p-4 font-bold bg-slate-400">=</button>

      </div>
    </div>
  )
}

export default Calculator

