
// 必玩页面轮播图
let imgs = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg'];
let num = 0;

setInterval(() => {
  num = (num + 1) % imgs.length;
  document.getElementById('pic').src = imgs[num];
}, 3000);
