const title = document.querySelector('div.hello:first-child h1');

function handleTitleClick() {
  console.log('title was clicked');
  title.style.color = 'blue';
}

title.addEventListener('click', handleTitleClick);
title.addEventListener('click', handleTitleClick);
title.addEventListener('click', handleTitleClick);
title.addEventListener('click', handleTitleClick);
title.addEventListener('click', handleTitleClick);

