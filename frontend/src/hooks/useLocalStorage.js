import { useState, useEffect } from "react";

// Custom Hook to keep state data synced with localstorage //
// Usage - allows for token to be stared in localStorage and available when site relaods //

function useLocalStorage(key, firstValue = null) {
  const initialValue = localStorage.getItem(key) || firstValue;

  const [item, setItem] = useState(initialValue);

  useEffect(function setKeyInLocalStorage() {

    if (item === null) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, item);
    }
  }, [key, item]);

  return [item, setItem];
}

export default useLocalStorage;
