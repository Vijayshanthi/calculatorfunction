import React, { useState } from 'react';


const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const handleInput = (value) => {
    setInput(input + value);
  };
  const handleClear = () => {
    setInput('');
    setResult('');
  };
  const handleCalculate = () => {
    let currentInput = input;
    let tempValue = '';
    let currentOperator = '';
    let total = 0;
    for (let i = 0; i < currentInput.length; i++) {
      const char = currentInput[i];
      if (char === '+' || char === '-' || char === '/' || char === '%') {
        if (currentOperator === '') {
          currentOperator = char;
          total = parseFloat(tempValue);
          tempValue = '';
        } else {
          if (currentOperator === '+') {
            total += parseFloat(tempValue);
          } else if (currentOperator === '-') {
            total -= parseFloat(tempValue);
          } else if (currentOperator === '/') {
            total /= parseFloat(tempValue);
          } else if (currentOperator === '%') {
            total %= parseFloat(tempValue);
          }
          tempValue = '';
          currentOperator = char;
        }
      } else {
        tempValue += char;
      }
    }
    if (tempValue !== '') {
      if (currentOperator === '+') {
        total += parseFloat(tempValue);
      } else if (currentOperator === '-') {
        total -= parseFloat(tempValue);
      } else if (currentOperator === '/') {
        total /= parseFloat(tempValue);
      } else if (currentOperator === '%') {
        total %= parseFloat(tempValue);
      }
    }
    setResult(total.toString());
  };
  return (
    < div className="calculator">
    <div className="display">
      <div className="input"><input type="text" value={input} readOnly /></div>
      <div className="result"><input type="text" value={result} readOnly /></div>
    </div>
    <div className="buttons">
      <button onClick={() => handleInput('7')}>7</button>
      <button onClick={() => handleInput('8')}>8</button>
      <button onClick={() => handleInput('9')}>9</button>
      <button onClick={() => handleInput('+')}>+</button>
      <button onClick={() => handleInput('4')}>4</button>
      <button onClick={() => handleInput('5')}>5</button>
      <button onClick={() => handleInput('6')}>6</button>
      <button onClick={() => handleInput('-')}>-</button>
      <button onClick={() => handleInput('1')}>1</button>
      <button onClick={() => handleInput('2')}>2</button>
      <button onClick={() => handleInput('3')}>3</button>
      <button onClick={() => handleInput('*')}>/</button>
      <button onClick={() => handleInput('0')}>0</button>
      <button onClick={() => handleInput('%')}>%</button>
      <button className="clear" onClick={handleClear }>C</button>
      <button className="equals" onClick={handleCalculate}>=</button>
    </div>
  </div >
  );
};
export default Calculator;