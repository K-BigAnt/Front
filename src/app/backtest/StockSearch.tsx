import { useDebounce } from "@/app/hooks/useDebounce";
interface SearchResult {
  name: string;
  symbol: string;
  type: string;
  country: string;
}

export default function StockSearch() {
  const {
    initValue,
    setInitValue,
    initOnChange,
    debouncedValue,
    isOpen,
    setIsOpen,
  } = useDebounce<SearchResult[]>(
    200,
    "http://localhost:3000/api/stock?search="
  );

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
              className={`cursor-pointer  bg-white hover:bg-gray-100 p-1 rounded-md ${
                isOpen ? "block" : "hidden"
              }`}
              onMouseDown={() => {
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
