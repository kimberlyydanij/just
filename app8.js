const h1 = document.querySelector('div.hello:first-child h1');

function handleTitleClick() {
  h1.innerHTML = 'title was clicked';
  h1.style.color = 'blue';
}

function handleMouseEnter() {
  h1.innerHTML = 'Mouse is here';
  h1.style.color = 'red';
}

function handleMouseLeave() {
  h1.innerHTML = 'Mouse is gone';
  h1.style.color = 'yellow';
}

function handleWindowResize() {
  document.body.style.backgroundColor = 'tomato';
}

function handleWindowCopy() {
  alert('Copy!!');
}

function handleWindowOffline() {
  alert('SOS no WIFI!!');
}

h1.onclick = handleTitleClick;
h1.addEventListener('mouseenter', handleMouseEnter);
h1.addEventListener('mouseleave', handleMouseLeave);

window.addEventListener('resize', handleWindowResize);
window.addEventListener('copy', handleWindowCopy);
window.addEventListener('offline', handleWindowOffline);
