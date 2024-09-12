import ReactApexChart from "react-apexcharts";

export default function Pie() {
  return (
    <>
      <ReactApexChart
        className="h-[500px] w-[500px]"
        type="pie"
        series={[4, 4, 4, 4]}
        options={{
          labels: ["A", "B", "C", "D"],
        }}
        width={500}
        height={500}
      />
    </>
  );
}
