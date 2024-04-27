import { useRecoilValue } from "recoil";
import ApexCharts from "react-apexcharts";

import { weatherDataState } from "../../state/atoms/weatherState";

import { Wrap } from "../../styles/WeatherForcastChart.styled";

function ForcastChart() {
  const weatherData = useRecoilValue(weatherDataState);
  const weeklyForcastData = weatherData?.daily;
  const weeklyTemp = weeklyForcastData?.map((day) => {
    return day.temp.day
  });

  const weeklyDayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const weeklyDay = weeklyForcastData?.map((day) => {
    const date = new Date(day.dt * 1000).getDay();
    return weeklyDayNames[date]; // 각 숫자에 해당하는 요일 문자열 반환
  });


  return (
    <Wrap>
      <ApexCharts
        type="area"
        height={250}
        options={{
          chart: {
            background: "transparent",
            toolbar: { show: false },
            zoom: {
              enabled: false
            }
          },
          dataLabels: {
            formatter: function(value) {
              return Number(value).toFixed(0) + "°";
            },
            offsetX: 1.5,
            background: {
              padding: 8 ,
              borderRadius: 12,
              borderWidth: 2,
            },
          },
          colors: ["#333"],
          stroke: {
            curve: "smooth",
            width: 4
          },
          xaxis: {
            categories: weeklyDay,
          },
          yaxis: {
            show: false,
          },
          grid: {
            yaxis: {
              lines: {
                show: false
              }
            }
          },
          tooltip: {
            enabled: false,
          }    
        }}
        series={[{
          name: "Temperature",
          data: weeklyTemp ?? [],
        }]}
      />
    </Wrap>
  )
}

export default ForcastChart;