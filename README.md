# LocaWeather
## 프로젝트 소개
사용자의 위치 기반으로 실시간 날씨 정보와 오늘의 상세 날씨, 일주일간의 날씨예보를 제공하는 웹페이지입니다. 검색 기능을 통해 전 세계에 있는 도시의 날씨 또한 확인할 수 있습니다.


## 기능 소개
### 사용자 위치 기반 날씨 정보 제공
![location](https://github.com/misobae/LocaWeather/assets/156400599/4a62546d-4f6b-484d-be15-13f2bd7b3507)
브라우저의 Geolocation API로 사용자의 위치 정보를 수집해, 사용자의 위치에 따른 날씨 정보를 제공합니다.

### 검색 기능
![search](https://github.com/misobae/LocaWeather/assets/156400599/32b846d7-7f1e-46a6-a3e2-c344819fecc0)
검색어를 기반으로 한 API를 호출해, 사용자가 검색한 도시의 날씨를 확인할 수 있습니다.

### 즐겨찾기 기능
![favorite](https://github.com/misobae/LocaWeather/assets/156400599/4d0d7d10-56bc-407d-ac57-70fc4ba831b4)
하트 버튼을 클릭하면 현재 사용자가 보고 있는 도시 이름을 state에 담았습니다.
그 state를 Favorite List에 출력하고, 도시 이름을 클릭하면 검색 기능에 사용했던 검색어(도시 이름)를 기반으로 한 API를 호출하여 즐겨찾기 기능을 사용할 수 있습니다.

### 데이터 시각화
![chart](https://github.com/misobae/LocaWeather/assets/156400599/fc02bbd1-4510-4c83-b925-a2ec8ff9b53c)
- 주간 날씨 데이터의 온도 변화를 Line 차트로 시각화하여 온도 변화 추이를 쉽게 파악할 수 있도록 하였습니다. UV 지수와 습도 데이터를 styled-components에서 props로 전달받아 세미 도넛 차트와 범위 차트로 시각화하여 해당 숫자 데이터를 가시적으로 확인할 수 있도록 하였습니다.



## 사용한 기술 및 라이브러리
- 언어: TypeScript
- 코어 라이브러리: React
- 상태관리: Recoil, React Query
- 스타일: styled-components, Framer Motion
- HTTP 클라이언트: Axios
- 외부 라이브러리: Openweather API
- 패키지 매니저: npm
- 빌드: CRA

## 개발 환경
node ```v20.11.0```

npm ```10.2.4```

## 프로젝트 설치 및 실행 방법
1. 소스 코드 가져오기
```bash
git clone https://github.com/misobae/weather-app.git
```
2. 복제된 프로젝트 폴더로 이동
```bash
cd weather-app
```
3. 패키지 Dependencies 설치
```bash
npm install
```
4. [OpenWeather API](https://openweathermap.org/)에서 API key 요청, 이를 .env 파일에 추가
```bash
REACT_APP_OPENWEATHER_API_KEY=REACT_APP_OPENWEATHER_API_KEY
```
5. 애플리케이션 실행
```bash
npm start
```