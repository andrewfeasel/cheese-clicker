document.addEventListener('DOMContentLoaded', () => {
  const counter = document.getElementById('counter');
  const cheese = document.getElementById('cheese');
  cheese.onclick = () => {
    int = Math.round(counter.textContent.charAt(0));
    int++;
    counter.textContent.charAt(0) = int;
    //do something with audio
  }
});
