import { useDebounce } from "@/app/hooks/useDebounce";
import { useInput } from "@/app/hooks/useInput";

interface SearchResult {
  name: string;
  symbol: string;
  type: string;
  country: string;
}

export default function SearchBar() {
  const [initText, setInitText] = useInput("", (value) => true);
  const debouncedText = useDebounce<SearchResult[]>(
    initText,
    200,
    "http://localhost:3000/api/stock?search="
  );

  return (
    <div className="relative">
      제목
      <input
        type="text"
        className="border-2 border-gray-300 rounded-md"
        value={initText}
        onChange={setInitText}
      />
      {initText !== "" && (
        <div className="absolute top-9 left-0">
          {debouncedText?.map((result) => (
            <div key={result.symbol}>{result.name}</div>
          ))}
        </div>
      )}
    </div>
  );
}
