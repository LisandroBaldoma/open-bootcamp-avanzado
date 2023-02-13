import React from "react";
import useCounter from "../../hooks/useCounter";

const contador = {
    valorInicial: 0,
    maximo: 10,
    minimo: 0,
    step:2
  };

const Ejercicio1 = () => {  

  const counter = useCounter(contador.valorInicial);  

  const handleIncrement = (event) => {
    event.preventDefault()
    counter.increment(contador.step);
  };
  const handleDecrement = (event) => {
    event.preventDefault()
    counter.decrement(contador.step);
  };
  const handleReset = (event) => {
    event.preventDefault()
    counter.reset();
  }

  return (
    <div>
      <button onClick={handleDecrement}>Decrement</button>
      {counter.counter}      
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Ejercicio1;
