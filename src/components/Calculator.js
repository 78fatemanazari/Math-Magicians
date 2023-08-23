import calculate from "../logic/calculate";

function Calculator() {
  return (
    <div className="calculator">
      <div className="row">
        <input className="input-cell" type="text" placeholder="0" />
      </div>
      <div className="row">
        <button className="button-cell" type="button">AC</button>
        <button className="button-cell" type="button">+/-</button>
        <button className="button-cell" type="button">%</button>
        <button className="button-cell last-column" type="button">÷</button>
      </div>
      <div className="row">
        <button className="button-cell" type="button">7</button>
        <button className="button-cell" type="button">8</button>
        <button className="button-cell" type="button">9</button>
        <button className="button-cell last-column" type="button">x</button>
      </div>
      <div className="row">
        <button className="button-cell" type="button">4</button>
        <button className="button-cell" type="button">5</button>
        <button className="button-cell" type="button">6</button>
        <button className="button-cell last-column" type="button">-</button>
      </div>
      <div className="row">
        <button className="button-cell" type="button">1</button>
        <button className="button-cell" type="button">2</button>
        <button className="button-cell" type="button">3</button>
        <button className="button-cell last-column" type="button">+</button>
      </div>
      <div className="row">
        <button className="button-cell zero-cell" type="button">0</button>
        <button className="button-cell" type="button">.</button>
        <button className="button-cell last-column" type="button">=</button>
      </div>
    </div>
  );
}

export default Calculator;
