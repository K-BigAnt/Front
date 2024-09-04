import axios from "axios";
import { useEffect, useState } from "react";

export const useDebounce = <T>(value: string, delay: number, api: string) => {
  const [debouncedValue, setDebouncedValue] = useState<T | null>(null);
  useEffect(() => {
    const handler = setTimeout(() => {
      axios.get(`${api}${value}`).then((res) => {
        setDebouncedValue(res.data as T);
      });
    }, delay);
    return () => clearTimeout(handler);
  }, [value, delay, api]);
  return debouncedValue;
};
