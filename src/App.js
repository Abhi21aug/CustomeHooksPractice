import "./styles.css";
import react, { useState } from "react";

const useLocalStorage = (key, initialVal) => {
  const storedVal = localStorage.getItem(key);
  const initailStoredVal = storedVal ? JSON.parse(storedVal) : initialVal;

  const [val, setVal] = useState(initailStoredVal);
  const updateLocalStorage = (newValue) => {
    setVal(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [val, updateLocalStorage];
};

export default function App() {
  const [value, setValue] = useLocalStorage("abhi", 2);

  return (
    <div className="App">
      <h1>react</h1>
    </div>
  );
}
