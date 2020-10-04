import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import { Button } from 'reactstrap';
import './App.css';
import 'react-clock/dist/Clock.css';
import Clock from 'react-clock'

function App() {
  const [value, setValue] = useState(new Date());
  const [sumir, setSumir] = useState(true);

  useEffect(() => {
    const interval = setInterval(
      () => setValue(new Date()),
      1000
    );

    return () => {
      clearInterval(interval);
    }
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: "center", textAlign:"center" }} >
      <input></input>
      {sumir && <button >Click me</button>}
      <Button onClick={()=>{setSumir(!sumir)}} color="danger">Danger!</Button>
    </div>
  );
}

export default App;
