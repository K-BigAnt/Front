import { useState } from "react";

export const useInput = (
  initialValue: string,
  branchFuction: (value: string) => boolean
): [string, (e: React.ChangeEvent<HTMLInputElement>) => void] => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (branchFuction(e.target.value)) {
      setValue(e.target.value);
    }
  };

  return [value, onChange];
};
