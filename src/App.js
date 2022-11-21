import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");

    const operators = ['/', '*', '+', '-', '.'];

    const updateCalc = value => {
        if (
            operators.includes(value) && calc === '' || ops.includes(value) && operators.includes(calc.slice(-1))
        ) { return; }
        setCalc(calc + value);
        if (!operators.includes(value)) {
            setResult(eval(calc + value).toString());
        }
    }
    const createDigits = () => {
        const digits = [];
        for (let i = 1; i < 10; i++) {
            digits.push(
                <button onClick={() => updateCalc(i.toString())} key={i } > {i}</button>
            )
        }
        return digits;
    }

    const calculate = () => {
        setCalc(eval(calc).toString());
    }

    const delete = () => {
        if (calc === '') {
            return;
        }
        const value = calc.slice(0, -1);
        setCalc(value);
    }
  return (
      <div className="App">
          <div className="calculator">
              <div className="display">
                  {calc || 0}
              </div>
              <div className="ops">
                  <button onClick={() => updateCalc('/')}>/</button>
                  <button onClick={() => updateCalc('*')}>*</button>
                  <button onClick={() => updateCalc('+')}>+</button>
                  <button onClick={() => updateCalc('-')}>-</button>
                  <button onClick={delete}>AC</button>
              </div>

              <div className="digits">
                  {createDigits()}
                  <button onClick={() => updateCalc('.')}>.</button>
                  <button onClick={() => updateCalc('0')}>0</button>
                  <button onClick={calculate}>=</button>
              </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
                  </header>
             
              </div>
    </div>
  );
}

export default App;
