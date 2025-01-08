if(!localStorage.getItem(clicks)){
  localStorage.setItem(clicks,0);
}
document.addEventListener('DOMContentLoaded', () => {
  const counter = document.getElementById('counter');
  let int = localStorage.getItem(clicks);
  const cheese = document.getElementById('cheese');
  cheese.onclick = () => {
    localStorage.setItem(clicks,localStorage.getItem(clicks) + 1)
    counter.textContent = int;
    //do something with audio
  }
});
