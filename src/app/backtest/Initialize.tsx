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

interface Props {
  portfolio: string;
}

export default function Initialize({ portfolio }: Props) {
  const [initAmount, , initOnChange] = useInput(
    "",
    (value: string) => value.length < 10
  );
  const [stock, setStock] = useState<stockInfo>(getPortfolio(portfolio));
  const handleAddStock = () => {
    setStock({ ...stock, stock: [...stock.stock, ""] });
  };
  const handleBacktest = () => {
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
                index={index}
                stockText={item}
                stock={stock}
                setStock={setStock}
              />
            );
          })}
          <button onClick={handleAddStock}>종목 추가</button>
        </div>
        <button className="ml-10" onClick={handleBacktest}>
          백테스트 실행
        </button>
      </div>
    </div>
  );
}

const getPortfolio = (portfolio: string): stockInfo => {
  if (portfolio === "레이달리오 포트폴리오") {
    const stockInfo: stockInfo = {
      startDate: "2024-04-01",
      endDate: "2024-07-01",
      initialAsset: 100000000,
      rebalancing: "반기별",
      stock: ["삼성전자", "SK하이닉스", "현대차", "삼성바이오로그램"],
    };
    return stockInfo;
  }
  if (portfolio === "그레그 포트폴리오") {
    const stockInfo: stockInfo = {
      startDate: "2024-04-01",
      endDate: "2024-07-01",
      initialAsset: 100000000,
      rebalancing: "반기별",
      stock: ["비브라눔", "최후의 속삭임", "그래피비", "파라바림", "그래피비"],
    };
    return stockInfo;
  }
  if (portfolio === "프리가바 포트폴리오") {
    const stockInfo: stockInfo = {
      startDate: "2024-04-01",
      endDate: "2024-07-01",
      initialAsset: 100000000,
      rebalancing: "반기별",
      stock: ["플레이므", "가르바리", "홀리만", "슬레디아"],
    };
    return stockInfo;
  }
  if (portfolio === "필라인 포트폴리오") {
    const stockInfo: stockInfo = {
      startDate: "2024-04-01",
      endDate: "2024-07-01",
      initialAsset: 100000000,
      rebalancing: "반기별",
      stock: ["피미난", "필라인 가라", "플레요", "블래기"],
    };
    return stockInfo;
  }
  return {
    startDate: "2024-04-01",
    endDate: "2024-07-01",
    initialAsset: 0,
    rebalancing: "반기별",
    stock: [],
  };
};
