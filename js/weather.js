/* navigator를 통해 wifi, 위치, gps 등 받아올 수 있음 */

const API_KEY = '--';

/* 위치를 받는데 성공했을 때 호출 */
function onGeoOk(position) {
    console.log(position);
    const lat = position.coords.latitude; //위도
    const lon = position.coords.longitude; //경도

    /* open weather map의 Current Weather Data API 사용 */
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    // console.log(url);
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data.name, data.weather[0].main);
        });
}

/* 위치를 받는데 문제가 발생했을 때 호출 */
function onGeoError() {
    alert("Can't find you. No weather for you.");
}

/* getCurrentPosition은 argument 두 개가 필요 */
/* 첫 번째 인자: 잘 실행됐을 경우 실행될 함수 */
/* 두 번째 인자: 실패했을 경우 실행될 함수 */
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
