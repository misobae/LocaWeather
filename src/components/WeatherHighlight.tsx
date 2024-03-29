import { useRecoilValue } from "recoil";
import { weatherDataState } from "../state/atoms/weatherState";

import { 
  Wrap,
  Item,
  Title,
  Content,
  ContentChart,
  Chart,
  ContentSun,
  ContentCommon
} from "../styles/WeatherHighlight.styled";


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
          <Item>
            <Title>UV INDEX</Title>
            <Content>
              <ContentChart>
                <Chart style={{ transform: `rotate(${(weatherData.current.uvi / 15) * 180}deg)`}}></Chart>
                <span>{weatherData.current.uvi}</span>
              </ContentChart>
            </Content>
          </Item>
          <Item>
            <Title>SUNRISE & SUNSET</Title>
            <Content>
              <ContentSun>
                <img className="icon" src={process.env.PUBLIC_URL + '/images/icon_sunrise.png'} alt="Sunrise" />
                <p>{localSunriseString}</p>
              </ContentSun>
              <ContentSun>
                <img className="icon" src={process.env.PUBLIC_URL + '/images/icon_sunset.png'} alt="Sunset" />
                <p>{localSunsetString}</p>
              </ContentSun>
            </Content>
          </Item>
          <Item>
            <Title>HUMIDITY</Title>
            <Content>
              <ContentCommon>
                <p>{weatherData.current.humidity}<span>%</span></p>
                <div className="range">
                  <span style={{ bottom: `${(weatherData.current.humidity * 0.76) + 4}px`}}></span>
                </div>
              </ContentCommon>
            </Content>
          </Item>
          <Item>
            <Title>WIND STATUS</Title>
            <Content>
              <ContentCommon>
                <p>{weatherData.current.wind_speed} <span>m/s</span></p>
                <img
                  className="icon--wind"
                  src={process.env.PUBLIC_URL + '/images/icon_wind.png'}
                  alt="바람"
                />
              </ContentCommon>
            </Content>
          </Item>
        </>
      )}
    </Wrap>
  )
}

export default WeatherHighlight;