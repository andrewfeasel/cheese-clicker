const counter = document.getElementById('counter');
const cheese = document.getElementById('cheese');
cheese.addEventListener('click', () => {
  let int = counter.textContent;
  alert(typeof int);
  int++;
  //do something with audio
})
