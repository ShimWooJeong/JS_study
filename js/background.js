const images = ['background1.jpg', 'background2.jpg', 'background3.jpg', 'background4.jpg'];

const chosenImage = images[Math.floor(Math.random() * images.length)];

/* html element를 생성 */
const bgImage = document.createElement('img');
bgImage.src = `img/${chosenImage}`;

/* 생성한 element를 html의 body 맨 아래에 추가 */
document.body.appendChild(bgImage);
