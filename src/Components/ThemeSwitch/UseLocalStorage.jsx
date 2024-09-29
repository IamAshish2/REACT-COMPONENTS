import { useEffect, useState } from "react";

const UseLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    let currentValue;
    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultValue)
      );
    } catch (err) {
      console.log(err.message);
      currentValue = defaultValue;
    }
    return currentValue;
  });
  
  useEffect(() => {
    localStorage.setItem(key,JSON.stringify(value));
  },[key,value]);
  return [value,setValue];
};

export default UseLocalStorage;
