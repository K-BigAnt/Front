"use client";

import * as Popover from "@radix-ui/react-popover";
import useSWR from "swr";

export default function Home() {
  const fetcher = () => fetch("/api/test").then((res) => res.json());
  const { data, error, isLoading } = useSWR("/api/test", fetcher);

  console.log(data);
  if (error) {
    console.log("error");
    return;
  }
  if (isLoading) {
    console.log("loading");
    return;
  }
  return (
    <div>
      <Popover.Root>
        <Popover.Trigger className="mx-10 mt-10">
          성준님 열어보세요
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content className="">
            {data.text}
            <Popover.Arrow className="" />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
}
