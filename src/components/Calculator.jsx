/* eslint-disable */
import React from "react"
import { useState } from "react"



function Calculator() {
  const [currentValue, setCurrentValue] = useState('0')
  const [pendingOperation, setPendingOperation] = useState(null)
  const [pendingValue, setPendingValue] = useState(null)
  const [compliteOperation, setCompliteOperation] = useState('')


  const keypadNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
  const operations = ["+", "-", "*", "/"]

  const handleClick = (val) => {
    setCurrentValue((prevValue) => {
      if (prevValue === '0') {
        return val
      } else {
        return prevValue + val
      }
    })
    setCompliteOperation((prevOperation) => prevOperation + val)
  }

  //Função de operações
  const handleOperation = (operation) => {
    setCompliteOperation(currentValue + " " + operation)
    setPendingOperation(operation)
    setPendingValue(currentValue)
    setCurrentValue('0')
  }

  //Função para limpar com botão AC
  const handleClear = () => {
    setCurrentValue('0')
    setPendingOperation(null)
    setPendingValue(null)
    setCompliteOperation('')
  }

  // Função para realizar os calculos
  const handleCalculate = () => {
    if (!pendingOperation || !pendingValue) return;

    const num1 = parseFloat(pendingValue)
    const num2 = parseFloat(currentValue)
    let result

    switch (pendingOperation) {
      case '+':
        result = num1 + num2
        break;
      case '-':
        result = num1 - num2
        break;
      case '*':
        result = num1 * num2
        break;
      case '/':
        if (num2 !== 0) {
          result = num1 / num2
        } else {
          setCurrentValue("Error")
          setCompliteOperation("Error")
          setPendingOperation(null)
          setPendingValue(null)
          return
        }
        break;

      default:
        break;
    }

    setCompliteOperation(
      pendingValue +
       " " +
        pendingOperation + 
        " " +
        currentValue + 
        " = " +
        result
    )
    setCurrentValue(result.toString())
    setPendingOperation(null)
    setPendingValue(null)
  }

  return (
    <div className="flex w-full h-screen bg-slate-200 justify-center items-center">
      <div className='flex flex-col items-center justify-center w-[250px] m-10 h-[380px] bg-blue-200 p-2 rounded'>
      <div className='w-full h-[50px] border mb-3 text-right p-1 overflow-auto rounded bg-green-400 font-bold'>{compliteOperation}</div>
      <div className='w-full h-[50px] border mb-3 text-right p-1 overflow-auto rounded bg-green-400 font-bold'>{currentValue}</div>
      <div className='grid  grid-cols-4 gap-2'>
        <button onClick={() => handleClear()} className="grid p-4 font-bold bg-slate-400">AC</button>
        {operations.map((operation) => (
          <button onClick={() => handleOperation(operation)} className="p-4 font-bold bg-slate-400 rounded " key={operation}>{operation}</button>
        ))}
        {keypadNumber.map((num) => (
          <button onClick={() => handleClick(num)} className="p-4 font-bold bg-slate-500 rounded-sm" key={num}>{num}</button>
        ))}
        
        <button onClick={handleCalculate} className="grid p-4 font-bold bg-slate-400 rounded">=</button>

      </div>
    </div>
    </div>
  )
}


export default Calculator

