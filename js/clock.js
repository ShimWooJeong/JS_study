const clock = document.querySelector('#clock');

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);

// /* interval: 일정 시간을 기준으로 ‘매번’ 일어나는 일
//    timeout: 일정 시간이 흐른 뒤 ‘한 번’ 일어나는 일 */
// setInterval(sayHello, 5000);
// setTimeout(sayHello, 5000);

// /* JS는 Date object를 기본적으로 제공 */
// const date = new Date();
// date.getDate();
