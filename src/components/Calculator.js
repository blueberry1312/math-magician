import React from 'react';
import './Calculator.css';

export default function Calculator() {
  const result = 0;
  return (
    <div className="container">
      <div className="result">{result}</div>
      <button type="button" className="btn-light btn-zero">0</button>
      <button type="button" className="btn-light btn-dot">.</button>
      <button type="button" className="btn-coloured btn-equal">=</button>
      <button type="button" className="btn-light btn-clear">AC</button>
      <button type="button" className="btn-light btn-sign">+/-</button>
      <button type="button" className="btn-light btn-percentage">%</button>
      <button type="button" className="btn-coloured btn-divider">/</button>
      <button type="button" className="btn-coloured btn-multiply">*</button>
      <button type="button" className="btn-coloured btn-substract">-</button>
      <button type="button" className="btn-coloured btn-plus">+</button>
      <button type="button" className="btn-light btn-one">1</button>
      <button type="button" className="btn-light btn-two">2</button>
      <button type="button" className="btn-light btn-three">3</button>
      <button type="button" className="btn-light btn-four">4</button>
      <button type="button" className="btn-light btn-five">5</button>
      <button type="button" className="btn-light btn-six">6</button>
      <button type="button" className="btn-light btn-seven">7</button>
      <button type="button" className="btn-light btn-eight">8</button>
      <button type="button" className="btn-light btn-nine">9</button>
    </div>
  );
}
