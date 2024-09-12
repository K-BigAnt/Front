import { useDebounce } from "@/app/hooks/useDebounce";
import { stockInfo } from "../types/stock";
import { useState } from "react";

interface Props {
  index: number;
  stock: stockInfo;
  stockText: string;
  setStock: (stock: stockInfo) => void;
}

interface SearchResult {
  name: string;
  symbol: string;
  type: string;
  country: string;
}

export default function StockSearch({
  stock,
  setStock,
  stockText,
  index,
}: Props) {
  const { initValue, setInitValue, initOnChange, debouncedValue } = useDebounce<
    SearchResult[]
  >(stockText, 200, "http://localhost:80/v1/stock?query=");
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="relative">
      종목
      <input
        type="text"
        className="border-2 border-gray-300 rounded-md"
        value={initValue}
        onChange={initOnChange}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
      />
      <div className="absolute top-9 left-0">
        {isOpen &&
          debouncedValue?.map((result) => (
            <div
              key={result.symbol}
              className={`cursor-pointer  bg-white hover:bg-gray-100 p-1 ${
                isOpen ? "block" : "hidden"
              }`}
              onMouseDown={() => {
                setStock(setStockState(stock, index, result));
                setInitValue(result.name);
                setIsOpen(false);
              }}
            >
              {result.name}
            </div>
          ))}
      </div>
    </div>
  );
}

const setStockState = (
  stock: stockInfo,
  index: number,
  result: SearchResult
) => {
  const newStock = stock.stock;
  newStock[index] = result.name;
  return { ...stock, stock: newStock };
};
