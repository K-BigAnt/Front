import * as Popover from "@radix-ui/react-popover";
export default function Home() {
  return (
    <Popover.Root>
      <Popover.Trigger className="mx-10 mt-10">
        성준님 열어보세요
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="">
          ㅎㅇ
          <Popover.Arrow className="" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
