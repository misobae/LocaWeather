import { useRecoilValue } from "recoil";
import { weatherDataState } from "../state/atoms/weatherState";

import IconSunrise from '../assets/images/icon_sunrise.png'; 
import IconSunset from '../assets/images/icon_sunset.png'; 
import IconWind from '../assets/images/icon_wind.png'; 
import { 
  Wrap,
  ContentChart,
  Chart,
  ChartData,
  ContentSun,
  SunImgWrap,
  SunTime,
  ContentCommon,
  CommonNumber,
  Range,
  RangeCircle
} from "../styles/WeatherHighlight.styled";
import ContentBox from "./weatherHighlight/ContentBox";


function WeatherHighlight() {
  const weatherData = useRecoilValue(weatherDataState);

  let localSunriseString = '';
  let localSunsetString = '';
  if (weatherData) {
    // 일출, 일몰 시간 unix 타임스탬프 (밀리세컨드 -> 세컨드)
    const sunriseTimestamp = weatherData.current.sunrise * 1000;
    const sunsetTimestamp = weatherData.current.sunset * 1000;

    // UTC 시간으로 계산
    const sunriseUTC = new Date(sunriseTimestamp);
    const sunsetUTC = new Date(sunsetTimestamp);

    // 타임존 오프셋 시간으로 변환
    const timezoneOffsetHours = weatherData.timezone_offset / 3600;

    // 지역 시간 계산
    const sunriseLocalHours = (sunriseUTC.getUTCHours() + timezoneOffsetHours + 24) % 24;
    const sunsetLocalHours = (sunsetUTC.getUTCHours() + timezoneOffsetHours + 24) % 24;
    const sunriseLocalMinutes = sunriseUTC.getUTCMinutes();
    const sunsetLocalMinutes = sunsetUTC.getUTCMinutes();

    // 숫자가 한 자리 수인 경우 앞에 0 붙이는 함수
    const addLeadingZero = (number: number) => {
      return number < 10 ? `0${number}` : `${number}`;
    };

    // 지역 시간 문자열 생성
    const sunriseString = `${addLeadingZero(sunriseLocalHours)}:${addLeadingZero(sunriseLocalMinutes)}`;
    const sunsetString = `${addLeadingZero(sunsetLocalHours)}:${addLeadingZero(sunsetLocalMinutes)}`;

    localSunriseString = sunriseString;
    localSunsetString = sunsetString;
  }

  return (
    <Wrap>
      {weatherData && (
        <>
          <ContentBox title="UV INDEX">
            <ContentChart>
              <Chart $uvi={weatherData.current.uvi} />
              <ChartData>{weatherData.current.uvi}</ChartData>
            </ContentChart>
          </ContentBox>
          <ContentBox title="SUNRISE & SUNSET">
            <ContentSun>
              <SunImgWrap>
                <img src={IconSunrise} alt="Sunrise" />
              </SunImgWrap>
              <SunTime>{localSunriseString}</SunTime>
            </ContentSun>
            <ContentSun>
              <SunImgWrap>
                <img src={IconSunset} alt="Sunset" />
              </SunImgWrap>
              <SunTime>{localSunsetString}</SunTime>
            </ContentSun>
          </ContentBox>

          <ContentBox title="HUMIDITY">
            <ContentCommon>
              <CommonNumber>
                {weatherData.current.humidity}<span>%</span>
              </CommonNumber>
              <Range>
                <RangeCircle $humidity={weatherData.current.humidity} />
              </Range>
            </ContentCommon>
          </ContentBox>

          <ContentBox title="WIND STATUS">
            <ContentCommon>
              <CommonNumber>
                {weatherData.current.wind_speed} <span>m/s</span>
              </CommonNumber>
              <img
                className="icon--wind"
                src={IconWind}
                alt="바람"
              />
            </ContentCommon>
          </ContentBox>
        </>
      )}
    </Wrap>
  )
}

export default WeatherHighlight;