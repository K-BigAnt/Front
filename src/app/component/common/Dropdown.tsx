import { ChangeEvent, useState } from "react";

interface Props {
  initialValue: string;
  seleted: string;
  setSelected: (e: string) => void;
  options: string[];
}

export default function Dropdown({
  initialValue,
  seleted,
  setSelected,
  options,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="relative">
        <button onClick={() => setIsOpen(!isOpen)}>
          {initialValue}
          {isOpen && <span>▼</span>}
          {!isOpen && <span>▲</span>}
        </button>
      </div>
      {isOpen && (
        <div className="absolute">
          {options.map((option) => (
            <div>
              <button key={option} onClick={() => setSelected(option)}>
                {option}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
