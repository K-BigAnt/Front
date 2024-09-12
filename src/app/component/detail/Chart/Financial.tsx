import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";

interface Props {
  data: [number, number][];
}

interface FinancialProps {
  data: [number, number][];
  startDate: number;
  endDate: number;
}

interface FinancialChartState {
  series: { data: [number, number][] }[];
  options: ApexOptions;
  selection: string;
}

export default function FinancialChart({ data }: Props) {
  return (
    <>
      <Financial
        data={data}
        startDate={data[0][0]}
        endDate={data[data.length - 1][0]}
      />
    </>
  );
}

function Financial({ data, startDate, endDate }: FinancialProps) {
  const series: FinancialChartState["series"] = [
    {
      data: DataToFinancial(data),
    },
  ];

  const options: FinancialChartState["options"] = {
    chart: {
      id: "area-datetime",
      type: "area",
      height: 350,
      zoom: {
        autoScaleYaxis: true,
      },
    },
    // 그래프에 어노테이션 추가하는 기능
    // 어노테이션은 그래프에 텍스트를 추가하는 기능
    annotations: {
      yaxis: [
        {
          y: 30,
          borderColor: "#999",
          label: {
            text: "Support",
            style: {
              color: "#fff",
              background: "#00E396",
            },
          },
        },
      ],
      xaxis: [
        {
          x: endDate,
          borderColor: "#999",
          label: {
            text: "Rally",
            style: {
              color: "#fff",
              background: "#775DD0",
            },
          },
        },
      ],
    },
    dataLabels: {
      enabled: false,
    },
    // 마커 사이즈 조절
    markers: {
      size: 7,
    },
    // 그래프 처음 그릴 때 어디서부터 어디까지 그릴지 정하는 로직
    xaxis: {
      type: "datetime",
      min: startDate,
      max: endDate,
      tickAmount: 6,
    },
    // 툴팁 설정
    tooltip: {
      x: {
        format: "dd MMM yyyy",
      },
    },
    // 그래프 색상 설정
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 100],
      },
    },
  };

  // 그래프 시간대 설정
  function updateData(timeline: any) {
    switch (timeline) {
      case "all":
        ApexCharts.exec("area-datetime", "zoomX", startDate, endDate);
        break;
      default:
    }
  }

  const selection: string = "";
  return (
    <>
      <div id="chart">
        <div className="toolbar">
          <button
            id="one_month"
            onClick={() => updateData("one_month")}
            className={`p-5 text-teal-50 bg-blue-500 m-5 ${selection === "one_month" ? "active" : ""}`}
          >
            1M
          </button>

          <button
            id="six_months"
            onClick={() => updateData("six_months")}
            className={`p-5 text-teal-50 bg-blue-500 m-5 ${selection === "six_months" ? "active" : ""}`}
          >
            6M
          </button>

          <button
            id="one_year"
            onClick={() => updateData("one_year")}
            className={`p-5 text-teal-50 bg-blue-500 m-5 ${selection === "one_year" ? "active" : ""}`}
          >
            1Y
          </button>

          <button
            id="ytd"
            onClick={() => updateData("ytd")}
            className={`p-5 text-teal-50 bg-blue-500 m-5 ${selection === "ytd" ? "active" : ""}`}
          >
            YTD
          </button>

          <button
            id="all"
            onClick={() => updateData("all")}
            className={`p-5 text-teal-50 bg-blue-500 m-5 ${selection === "all" ? "active" : ""}`}
          >
            ALL
          </button>
        </div>

        <div id="chart-timeline">
          <ReactApexChart
            options={options}
            series={series}
            type="area"
            height={500}
            width={1000}
          />
        </div>
      </div>
      <div id="html-dist"></div>
    </>
  );
}

const DataToFinancial = (prices: any) => {
  const data = prices.map((price: any) => {
    const timestamp = new Date(
      price.date.slice(0, 4) +
        "-" +
        price.date.slice(4, 6) +
        "-" +
        price.date.slice(6, 8)
    ).getTime();
    return [timestamp, parseFloat(price.closePrice)];
  });
  return data.reverse();
};
