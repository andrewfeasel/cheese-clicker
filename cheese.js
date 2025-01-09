document.addEventListener('DOMContentLoaded', () => {
  const counter = document.getElementById('counter');
  const cheese = document.getElementById('cheese');
  let int;
  cheese.onclick = () => {
    let int = Math.round(counter.textContent);
    int++;
    counter.textContent = int;
    //do something with audio
  }
});
