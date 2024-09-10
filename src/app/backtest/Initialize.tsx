import { useState } from "react";

import Dropdown from "../component/common/Dropdown";
import { useInput } from "../hooks/useInput";
import StockSearch from "./StockSearch";

interface stockInfo {
  startDate: string;
  endDate: string;
  initialAsset: number;
  rebalancing: string;
  stock: string[];
}

export default function Initialize() {
  const [initAmount, , initOnChange] = useInput(
    "",
    (value: string) => value.length < 10
  );
  const [stock, setStock] = useState<stockInfo>({
    startDate: "",
    endDate: "",
    initialAsset: 0,
    rebalancing: "반기별",
    stock: [],
  });

  const handleAddStock = () => {
    setStock({ ...stock, stock: [...stock.stock, ""] });
  };

  const handleBacktest = () => {
    // 백테스트 실행하기 버튼시 stock 정보를 백엔드로 보내기
    console.log(stock);
  };

  return (
    <div>
      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-y-10">
          <div>
            <div>기간</div>
            <div className="flex flex-row items-center justify-center gap-10">
              <div>
                시작
                <input
                  type="month"
                  className="border-2 border-gray-300 rounded-md"
                  value={stock.startDate}
                  onChange={(e) =>
                    setStock({ ...stock, startDate: e.target.value })
                  }
                />
              </div>
              <div>
                종료
                <input
                  type="month"
                  className="border-2 border-gray-300 rounded-md"
                  value={stock.endDate}
                  onChange={(e) =>
                    setStock({ ...stock, endDate: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          <div>
            초기 자산
            <input
              type="text"
              className="border-2 border-gray-300 rounded-md"
              value={initAmount}
              onChange={initOnChange}
            />
          </div>

          <Dropdown
            initialValue="리밸런싱"
            seleted={stock.rebalancing}
            setSelected={(value) => setStock({ ...stock, rebalancing: value })}
            options={["반기별"]}
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-y-10">
          포트폴리오
          {stock.stock.map((item, index) => {
            return (
              <StockSearch
                key={item + index}
                stock={stock}
                setStock={setStock}
              />
            );
          })}
        </div>

        <button onClick={handleAddStock}>종목 추가</button>
        <button className="ml-10" onClick={handleBacktest}>
          백테스트 실행
        </button>
      </div>
    </div>
  );
}
