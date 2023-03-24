import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

export default function Calculator() {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    const newState = calculate(state, buttonName);
    setState(newState);
  };

  return (
    <div className="container">
      <div className="result">{state.next || state.total || '0'}</div>
      <button type="button" className="btn-light btn-zero" onClick={() => handleClick('0')}>0</button>
      <button type="button" className="btn-light btn-dot" onClick={() => handleClick('.')}>.</button>
      <button type="button" className="btn-coloured btn-equal" onClick={() => handleClick('=')}>=</button>
      <button type="button" className="btn-light btn-clear" onClick={() => handleClick('AC')}>AC</button>
      <button type="button" className="btn-light btn-sign" onClick={() => handleClick('+/-')}>+/-</button>
      <button type="button" className="btn-light btn-percentage" onClick={() => handleClick('%')}>%</button>
      <button type="button" className="btn-coloured btn-divider" onClick={() => handleClick('÷')}>/</button>
      <button type="button" className="btn-coloured btn-multiply" onClick={() => handleClick('x')}>*</button>
      <button type="button" className="btn-coloured btn-substract" onClick={() => handleClick('-')}>-</button>
      <button type="button" className="btn-coloured btn-plus" onClick={() => handleClick('+')}>+</button>
      <button type="button" className="btn-light btn-one" onClick={() => handleClick('1')}>1</button>
      <button type="button" className="btn-light btn-two" onClick={() => handleClick('2')}>2</button>
      <button type="button" className="btn-light btn-three" onClick={() => handleClick('3')}>3</button>
      <button type="button" className="btn-light btn-four" onClick={() => handleClick('4')}>4</button>
      <button type="button" className="btn-light btn-five" onClick={() => handleClick('5')}>5</button>
      <button type="button" className="btn-light btn-six" onClick={() => handleClick('6')}>6</button>
      <button type="button" className="btn-light btn-seven" onClick={() => handleClick('7')}>7</button>
      <button type="button" className="btn-light btn-eight" onClick={() => handleClick('8')}>8</button>
      <button type="button" className="btn-light btn-nine" onClick={() => handleClick('9')}>9</button>
    </div>
  );
}
