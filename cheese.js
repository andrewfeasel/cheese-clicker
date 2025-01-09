let clicks = localStorage.getItem('clicks');
let int = clicks;
alert(localStorage.getItem('clicks'))
if(!clicks){
  localStorage.setItem('clicks',0);
  clicks = localStorage.getItem('clicks');
  int = clicks;
}
function clickhandle(num){
  localStorage.setItem('clicks', num);
  clicks = localStoragel.getItem('clicks');
  counter.textContent = `${int} clicks`;
}
const sfx = new Audio('./cheese.mp3');
document.addEventListener('DOMContentLoaded', () => {
  const counter = document.getElementById('counter');
  const cheese = document.getElementById('cheese');
  counter.textContent = `${int} clicks`;
  cheese.onclick = () => {
    int++;
    clickhandle(int);
    counter.textContent = `${int} clicks`;
    sfx.play();
  }

});
