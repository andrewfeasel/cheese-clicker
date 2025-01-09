const sfx = new Audio('./cheese.mp3');
document.addEventListener('DOMContentLoaded', () => {
  sfx.addEventListener("canplaythrough", (event) => {
    const counter = document.getElementById('counter');
    const cheese = document.getElementById('cheese');
    let int = 0;
    counter.textContent = `${int} clicks`;
    cheese.onclick = () => {
      int++;
      counter.textContent = `${int} clicks`;
      sfx.play();
    }
  });
});
