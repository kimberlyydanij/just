const title = document.querySelector('div.hello:first-child h1');

function handleTitleClick() {
  title.innerHTML = 'title was clicked';
  title.style.color = 'blue';
}

function handleMouseEnter() {
  title.innerHTML = 'Mouse is here';
  title.style.color = 'red';
}

function handleMouseLeave() {
  title.innerHTML = 'Mouse is gone';
  title.style.color = 'yellow';
}

title.addEventListener('click', handleTitleClick);
title.addEventListener('mouseenter', handleMouseEnter);
title.addEventListener('mouseleave', handleMouseLeave);
