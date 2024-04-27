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
        return "/images/thunderstorm.svg";
      case 'drizzle':
        return "/images/drizzle.svg";
      case 'rain':
        return "/images/rain.svg";
      case 'snow':
        return "/images/snow.svg";
      case 'atmosphere':
        return "/images/atmosphere.svg";
      case 'clear':
        return "/images/clear.svg";
      case 'fewcloud':
        return "/images/fewcloud.svg";
      case 'cloud':
        return "/images/cloud.svg";
      default:
        return "/images/default.svg";
    }
  };

  const category = getCategoryByCode(conditionCode);
  const iconPath = getIconPath(category);

  return <img className="weather-img" src={process.env.PUBLIC_URL + iconPath} alt={category} />;
};

export default WeatherImg;