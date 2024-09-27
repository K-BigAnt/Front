"use client";

import * as Popover from "@radix-ui/react-popover";
import axios from "axios";
import useSWR from "swr";

export default function Home() {
  const fetcher = () => axios.get("/api/v1/test").then((res) => res.data);
  const { data, error, isLoading } = useSWR("/api/v1/test", fetcher);

  return (
    <div>
      <Popover.Root>
        <Popover.Trigger className="mx-10 mt-10" name="popover-trigger">
          성준님 열어보세요
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content className="">
            {data?.text}
            <Popover.Arrow className="" />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
      <button name="test-button">버튼</button>
    </div>
  );
}
