import Logo from "../Logo";

const Title = () => {
  return (
    <div className="flex flex-col items-start">
      <Logo />
      <div className="text-[24px] font-semibold<">
        BigAnt와 함께
        <br /> 1억 모으기
      </div>
      <div className="text-[13px]">SNS계정으로 빠르게 시작하기</div>
    </div>
  );
};

export default Title;
