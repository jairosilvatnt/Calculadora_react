/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'

function Calculator() {

  const keypadNumber = ["1","2","3","4","5","6","7","8","9"]
  const operations = ["+","-","*","/"]
  return (
    <div className='flex justify-center items-center h-screen w-full'>
      <div className='complete-operation'>3 + 4 + = </div>
      <div className='display'> 6</div>
      <div className='buttons'>
        {keypadNumber.map((num) => (
          <button key={num}>{num}</button>
        ))}
        {operations.map((operation) => (
          <button key={operation}>{operation}</button>
        ))}
      </div>
    </div>
  )
}

export default Calculator

