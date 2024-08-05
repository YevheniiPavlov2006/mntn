document.addEventListener('DOMContentLoaded', () => {
  const card1 = document.getElementById('card1');

  window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight / 5 * 4;
    const card1Top = card1.getBoundingClientRect().top;
    if (card1Top < triggerBottom) {
      card1.classList.add('content__card__active');
  } else {
      card1.classList.remove('content__card__active');
  }

  });
});

document.addEventListener('DOMContentLoaded', () => {
  const card2 = document.getElementById('card2');

  window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight / 5 * 4;
    const card2Top = card2.getBoundingClientRect().top;
    if (card2Top < triggerBottom) {
      card2.classList.add('content__card2__active');
  } else {
      card2.classList.remove('content__card2__active');
  }

  });
});


document.addEventListener('DOMContentLoaded', () => {
  const card3 = document.getElementById('card3');

  window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight / 5 * 4;
    const card3Top = card3.getBoundingClientRect().top;
    if (card3Top < triggerBottom) {
      card3.classList.add('content__card__active');
  } else {
      card3.classList.remove('content__card__active');
  }

  });
});