document.addEventListener('DOMContentLoaded', () => {
  const counter = document.getElementById('counter');
  const cheese = document.getElementById('cheese');
  let int = 0;
  cheese.onclick = () => {
    int++;
    counter.textContent = `${int} clicks`;
    //do something with audio
  }
});
