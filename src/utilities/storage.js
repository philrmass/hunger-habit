import { useState } from 'react';

export function useLocalStorage(key, initialValue) {
  let storedValue = localStorage.getItem(key);
  if (storedValue === null) {
    storedValue = initialValue;
    localStorage.setItem(key, JSON.stringify(initialValue));
  } else {
    storedValue = JSON.parse(storedValue);
  }

  const [value, setValue] = useState(storedValue);

  return [value, (updated) => {
    setValue(updated);
    localStorage.setItem(key, JSON.stringify(updated));
  }];
}
