import { useState } from "react";
import { useInput } from "../hooks/useInput";
import Dropdown from "../component/common/Dropdown";

export default function Initialize() {
  const [initAmount, setInitAmount] = useInput(
    "",
    (value: string) => value.length < 10
  );

  const [rebalancing, setRebalancing] = useState("");
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
                />
              </div>
              <div>
                종료
                <input
                  type="month"
                  className="border-2 border-gray-300 rounded-md"
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
              onChange={setInitAmount}
            />
          </div>

          <Dropdown
            initialValue="리밸런싱"
            seleted={rebalancing}
            setSelected={setRebalancing}
            options={["월별", "분기별", "반기별", "연별"]}
          />
        </div>

        <div className="m-10">
          <div>포트폴리오</div>
        </div>
      </div>
      <button className="items-center justify-center">백테스트 실행</button>
    </div>
  );
}
