import { useState } from "react";

const useCounter = (inicialValue) => {
  const [counter, setCounter] = useState(inicialValue);

  const increment = (step) => {
    setCounter(counter + step);
  };

  const decrement = (step) => {
    setCounter(counter - step);
  };

  const reset = () => {
    setCounter(0);
  };

  return { counter, setCounter, increment, decrement, reset };
};

export default useCounter;
