import { Button } from "@/components/ui/button";

export default function Profile({ params }: {params: {name: string}}) {
  return (
    <div className="flex flex-row items-center">
      <div className="w-[80%]">
        <div className="flex flex-row items-center justify-center h-[200px]">
          <div className="w-[25%] h-[200px]  flex items-center justify-center">
            <div className="w-[150px] h-[150px] rounded-full bg-red-300"></div>
          </div>
          <div className="w-[55%] h-[200px]flex flex-col items-start justify-center pl-2">
            <div className="text-[48px] font-medium">{params.name}</div>
            <div className="text-[24px] font-medium">프로필 소개</div>
          </div>
          <div className="w-[20%] h-[200px] flex flex-col items-center justify-around gap-2 ">
            <Button variant="outline" className="w-[100px]">팔로우</Button>
            <Button variant="outline" className="w-[100px]">언팔로우</Button>
            <Button variant="outline" className="w-[100px]">프로필 수정</Button>
          </div>
        </div>
      </div>
      <div className="w-[20%]">
        검색창
      </div>
    </div>
  )
}
