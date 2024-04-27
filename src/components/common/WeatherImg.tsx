import thunderstormIcon from 'assets/images/thunderstorm.svg';
import rainIcon from 'assets/images/rain.svg';
import snowIcon from 'assets/images/snow.svg';
import atmosphereIcon from 'assets/images/atmosphere.svg';
import clearIcon from 'assets/images/clear.svg';
import fewcloudIcon from 'assets/images/fewcloud.svg';
import cloudIcon from 'assets/images/cloud.svg';
import defaultIcon from 'assets/images/default.svg';

function WeatherImg({ conditionCode }: { conditionCode: number }) {

  const getCategoryByCode = (code: number) => {
    if (code >= 200 && code < 300) return 'thunderstorm'; // 번개
    if (code >= 300 && code < 600) return 'rain'; // 비
    if (code >= 600 && code < 700) return 'snow'; // 눈
    if (code >= 700 && code < 800) return 'atmosphere'; // 안개, 먼지 등
    if (code === 800) return 'clear'; // 맑음
    if (code === 801) return 'fewcloud'; // 약간 흐림
    if (code >= 802 && code <= 804) return 'cloud'; // 흐림
    return 'default';
  };
  
  const getIconPath = (category: string) => {
    switch (category) {
      case 'thunderstorm':
        return thunderstormIcon;
      case 'drizzle':
        return atmosphereIcon;
      case 'rain':
        return rainIcon;
      case 'snow':
        return snowIcon;
      case 'atmosphere':
        return atmosphereIcon;
      case 'clear':
        return clearIcon;
      case 'fewcloud':
        return fewcloudIcon;
      case 'cloud':
        return cloudIcon;
      default:
        return defaultIcon;
    }
  };

  const category = getCategoryByCode(conditionCode);
  const iconPath = getIconPath(category);

  return <img className="weather-img" src={iconPath} alt={category} />;
};

export default WeatherImg;