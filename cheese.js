let int = 0;
const sfx = new Audio('./cheese.mp3');
document.addEventListener('DOMContentLoaded', () => {
  const counter = document.getElementById('counter');
  const cheese = document.getElementById('cheese');
  counter.textContent = `${int} clicks`;
  cheese.onclick = () => {
    int++;
    counter.textContent = `${int} clicks`;
    sfx.play();
  }

});
