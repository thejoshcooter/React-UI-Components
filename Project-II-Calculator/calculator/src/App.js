import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className="wrapper">
      <CalculatorDisplay />
      <div className="button-row">
        <ActionButton text="clear" />
        <NumberButton number="/" className="one-col red" />
      </div>
      <div className="button-row">
        <NumberButton number="7" className="one-col" />
        <NumberButton number="8" className="one-col" />
        <NumberButton number="9" className="one-col" />
        <NumberButton number="x" className="one-col red" />
      </div>
      <div className="button-row">
        <NumberButton number="4" className="one-col" />
        <NumberButton number="5" className="one-col" />
        <NumberButton number="6" className="one-col" />
        <NumberButton number="-" className="one-col red" />
      </div>
      <div className="button-row">
        <NumberButton number="1" className="one-col" />
        <NumberButton number="2" className="one-col" />
        <NumberButton number="3" className="one-col" />
        <NumberButton number="+" className="one-col red" />
      </div>
      <div className="button-row">
        <ActionButton text="0" />
        <NumberButton number="=" className="one-col red" />
      </div>
    </div>
  );
};

export default App;
