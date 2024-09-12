import axios from "axios";
import { useEffect, useState } from "react";
import { useInput } from "./useInput";

export const useDebounce = <T>(
  initString: string,
  delay: number,
  api: string
) => {
  const [initValue, setInitValue, initOnChange] = useInput(
    initString,
    (value) => true
  );
  const [debouncedValue, setDebouncedValue] = useState<T | null>(null);

  useEffect(() => {
    const handler = setTimeout(() => {
      axios.get(`${api}${initValue}`).then((res) => {
        setDebouncedValue(res.data as T);
      });
    }, delay);
    return () => clearTimeout(handler);
  }, [initValue, delay, api]);
  return {
    initValue,
    setInitValue,
    initOnChange,
    debouncedValue,
  };
};
