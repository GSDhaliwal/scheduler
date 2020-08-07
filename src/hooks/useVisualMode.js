import React, { useState } from "react"

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);


  function transition(newMode, replace = false) {

    if (replace) {
      setMode(newMode);
      setHistory(prev => prev.slice(0, prev.length-1).concat(newMode));
    } else {
      setMode(newMode);
      setHistory([...history, newMode]);
    }
  };


  function back() {

    let backOneStep = (history.slice(-2))[0];
    setMode(backOneStep)
    
    if (history.length > 1) {
      history.pop();
      setHistory(history)
      }

    }


  return { mode, transition, back };
}