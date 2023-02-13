import { useState } from "react";

const useList = (inicialValue = []) => {
  const [value, setValue] = useState(inicialValue);

  // Push new value to list.

  const push = (element) => {
    setValue((oldValue) => [...oldValue, element]);
  };

  // Remove value from list

  const remove = (index) => {
    setValue((oldValue) => oldValue.filter((_, i) => i !== index));
  };

  // List is Empty ? true / flase

  const isEmpty = () => value.length === 0;

  // Clear all element
  const clearAll = () => {
    setValue([]);
  };

  // Sort element of list.
  const sortElement = () => {
    value.sort((a, b) => a - b);
  };

  // Invert element of list
  const invertElement = () => {
    value.reverse();
  };

  // TODO Develop more functions for lists

  return { value, setValue, push, remove, isEmpty, clearAll, invertElement, sortElement };
};

export default useList;
