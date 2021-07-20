const splitContainer = document.querySelector('.split-container');

if (splitContainer) {
  const leftSide = splitContainer.querySelector('.left');
  const rightSide = splitContainer.querySelector('.right');

  leftSide.addEventListener('mouseenter', () =>
    splitContainer.classList.add('hover-left')
  );
  leftSide.addEventListener('mouseleave', () =>
    splitContainer.classList.remove('hover-left')
  );

  rightSide.addEventListener('mouseenter', () =>
    splitContainer.classList.add('hover-right')
  );
  rightSide.addEventListener('mouseleave', () =>
    splitContainer.classList.remove('hover-right')
  );
}
