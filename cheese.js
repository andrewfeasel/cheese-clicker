document.addEventListener('DOMContentLoaded', () => {
  const counter = document.getElementById('counter');
  const cheese = document.getElementById('cheese');
  let int;
  if(!localStorage.getItem(clicks)){
    localStorage.setItem(clicks,0);
    int = 0;
  }
  else{
    int = localStorage.getItem(clicks);
  }
  cheese.onclick = () => {
    alert(typeof int);
    let int = Math.round(counter.textContent);
    int++;
    counter.textContent = int;
    localStorage.setItem(clicks,int);
    //do something with audio
  }
});
