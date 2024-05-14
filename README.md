# LocaWeather
<div align="center">
  <img width="300" alt="image" src="https://github.com/misobae/LocaWeather/assets/156400599/45be9419-b00b-4037-84ae-665a1712bb68">
</div>

## 프로젝트 소개
LocaWeather는 세계 각지의 실시간 날씨와 주간 예보를 확인할 수 있는 웹 페이지입니다. 사용자의 위치 기반으로 날씨 예보를 제공하며, 검색을 통해 원하는 도시의 날씨를 확인할 수 있습니다. 즐겨찾기 기능을 사용하면 매번 검색할 필요 없이 자주 가는 도시의 날씨를 쉽게 확인할 수 있습니다. 직관적인 원페이지 디자인과 시각화된 데이터로 사용자에게 편리한 날씨 서비스를 제공합니다.

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
node ```v20.11.0```<br />
npm ```10.2.4```

## 기능 소개
### 사용자 현재 위치 기반 날씨 정보 제공
사용자의 위치 정보를 활용하여 실시간 날씨를 제공합니다.

![location](https://github.com/misobae/LocaWeather/assets/156400599/9c1fd6c9-f8a6-4e13-b0b9-7c6edb195c27)


### 도시 검색을 통한 날씨 조회 기능
검색창에 도시 이름을 입력하면 해당 도시의 날씨 정보를 즉시 확인할 수 있습니다.

![search](https://github.com/misobae/LocaWeather/assets/156400599/84739d8b-a14a-4658-8b0e-7f561c0cdbeb)


### 즐겨찾기 기능으로 자주 확인하는 도시 관리
자주 방문하는 도시를 즐겨찾기에 추가하여 간편하게 날씨를 확인할 수 있습니다.

![favorite](https://github.com/misobae/LocaWeather/assets/156400599/270c33bc-465a-4f5d-9451-3a7028ff4e24)


### 숫자 데이터 차트/그래프 시각화
날씨 데이터를 차트와 그래프로 시각화하여 사용자가 빠르고 쉽게 정보를 이해할 수 있도록 합니다.

| Line Chart |
|----------|
|![dv_1](https://github.com/misobae/LocaWeather/assets/156400599/6c1fb2e6-9e1b-4fb6-bc31-beee93f796ca)|

| Semi Donut Chart | Range Slider |
|----------|----------|
|![dv_2](https://github.com/misobae/LocaWeather/assets/156400599/532dfb59-c34c-4fd6-acb8-188b825d6434)|![dv_3](https://github.com/misobae/LocaWeather/assets/156400599/92ea2b42-61b8-43e6-8d13-e52675c0d8a9)|



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