import * as React from 'react';
import './style.css';

// Ejercicio Click Tracker

// Uso de State
export default function App() {
  const [numerCount, setNumberCount] = React.useState(0);
  const [date, setDate] = React.useState('');

  function clickCount() {
    setNumberCount(numerCount + 1);
    setDate(new Date().toString());
  }

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      {numerCount}
      <br />
      {date}
      <p>Start editing to see some magic happen :)</p>
      <button onClick={() => clickCount()}>Click me</button>
    </div>
  );
}
