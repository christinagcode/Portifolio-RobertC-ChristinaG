let stars = document.getElementById('stars')
let moon = document.getElementById('moon')
let mountains_behind = document.getElementById('mountains_behind')
let text = document.getElementById('text')
let btn = document.getElementById('btn')
let mountains_front = document.getElementById('mountains_front')
let header = document.querySelector('header')


window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 0.6 + 'px';
    mountains_behind.style.top = value * 0.4 + 'px';
    mountains_front.style.top = value * 0 + 'px';
    text.style.marginRight = value * 1 + 'px';
    text.style.marginTop = value * 0.5 + 'px';
    btn.style.marginTop = value * 1 + 'px';
    header.style.top = value * 0.5 + 'px';


}
)

// twinkle stars canvas 
const twilights = [];
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

function init() {
  const banner = document.getElementById("banner");
  canvas.width = banner.offsetWidth;
  canvas.height = banner.offsetHeight;
  for (let i = 0; i < 200; i++) {
    twilights.push({
      x: Math.random(),
      y: Math.random(),
      size: Math.random(),
      change: 0.15,
    });
  }
}
function update() {
  for (const light of twilights) {
    light.x += 0.01;
    if (light.x > 1) {
        light.x = 0;
    }
    if (light.size < 0.1) {
        light.change = 0.1;
    } else if (light.size > 0.9) {
        light.change = -0.1;
    }
    light.size += light.change;
  }
}
function render() {
  const { width, height } = canvas;
  context.clearRect(0, 0, width, height); 
  for (const light of twilights) {
    context.beginPath();
    context.arc(
        light.x * width,
        light.y * height,
        light.size * 3,
      0,
      2 * Math.PI,
      false
    );
    context.fillStyle = "white";
    context.fill();
  }
}

function twinkle() {
  update();
  render();
}
setInterval(twinkle, 100);
init();

render();