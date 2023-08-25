import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Button from './Button';
import Row from './Row';

function Calculator() {
  const [calculation, setCalculation] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const [inputValue, setInputValue] = useState('');

  const handleButtonClick = (buttonName) => {
    const newCalculation = calculate(calculation, buttonName);
    setCalculation(newCalculation);
    if (buttonName === 'AC') {
      setInputValue('');
    } else if (buttonName === '=') {
      setInputValue(newCalculation.total || '');
    } else {
      setInputValue(inputValue + buttonName);
    }
  };

  return (
    <div className="calculator">
      <Row>
        <input className="input-cell" type="text" value={inputValue} readOnly />
      </Row>
      <Row>
        <Button label="AC" type="button-cell" onClick={handleButtonClick} />
        <Button label="+/-" type="button-cell" onClick={handleButtonClick} />
        <Button label="%" type="button-cell" onClick={handleButtonClick} />
        <Button label="÷" type="button-cell last-column" onClick={handleButtonClick} />
      </Row>
      <Row>
        <Button label="7" type="button-cell" onClick={handleButtonClick} />
        <Button label="8" type="button-cell" onClick={handleButtonClick} />
        <Button label="9" type="button-cell" onClick={handleButtonClick} />
        <Button label="x" type="button-cell last-column" onClick={handleButtonClick} />
      </Row>
      <Row>
        <Button label="4" type="button-cell" onClick={handleButtonClick} />
        <Button label="5" type="button-cell" onClick={handleButtonClick} />
        <Button label="6" type="button-cell" onClick={handleButtonClick} />
        <Button label="-" type="button-cell last-column" onClick={handleButtonClick} />
      </Row>
      <Row>
        <Button label="1" type="button-cell" onClick={handleButtonClick} />
        <Button label="2" type="button-cell" onClick={handleButtonClick} />
        <Button label="3" type="button-cell" onClick={handleButtonClick} />
        <Button label="+" type="button-cell last-column" onClick={handleButtonClick} />
      </Row>
      <Row>
        <Button label="0" type="button-cell zero-cell" onClick={handleButtonClick} />
        <Button label="." type="button-cell" onClick={handleButtonClick} />
        <Button label="=" type="button-cell last-column" onClick={handleButtonClick} />
      </Row>
    </div>
  );
}

export default Calculator;
