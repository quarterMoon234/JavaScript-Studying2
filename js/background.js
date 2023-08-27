const jingLiu = [ "0.jpg", "1.jpg", "2.jpg"];

const jingLiuImage = jingLiu[Math.floor(Math.random() * jingLiu.length)];

const backGroundImg = document.createElement("img");

backGroundImg.src = `img/${jingLiuImage}`;

document.body.append(backGroundImg);