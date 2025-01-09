const sfx = new Audio('./videoplayback');
document.addEventListener('DOMContentLoaded', () => {
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
