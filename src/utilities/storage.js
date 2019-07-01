/*
import { useState } from 'react';

function getSetFunction(key, setValue) {
  return (value) => {
    setValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };
};

export function useLocalStorage(key, initialValue) {
  let setLocalValue = null;

  const [value, setValue] = useState(() => {
    const localValue = localStorage.getItem(key);
    if (localValue) {
      return JSON.parse(localValue);
    }
    return initialValue;
  });

  setLocalValue = getSetFunction(key, setValue);

  return [value, setLocalValue];
}
*/
