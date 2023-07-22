import React, { useEffect } from 'react';

const disableScroll = () => {
  const originalScrollPosition = window.pageYOffset;
  const html = document.documentElement;
  html.style.overflowY = 'hidden';

  window.addEventListener('blur', () => {
    html.style.overflowY = 'scroll';
    window.scrollTo(0, originalScrollPosition);
  });
};

const ScrollHandler = () => {
  useEffect(() => {
    disableScroll();

    return () => {
      // Возвращаем прокрутку при размонтировании компонента
      document.documentElement.style.overflowY = 'scroll';
    };
  }, []);

  return null;
  
};

export default ScrollHandler;