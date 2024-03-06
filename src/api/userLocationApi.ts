import { Location } from "./weatherApi";

export async function getUserLocation(): Promise<Location> {
  return new Promise((resolve, reject) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const userLocation: Location = {
            lat: position.coords.latitude,
            lon: position.coords.longitude
          };
          resolve(userLocation);
        },
        error => {
          reject(error);
        }
      );
    } else {
      reject(new Error("이 브라우저는 Geolocation을 지원하지 않습니다."));
    }
  });
}
