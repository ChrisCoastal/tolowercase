import React, { useEffect, useState } from 'react';

const useDarkTheme = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());

  function getCurrentTheme() {
    window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function mqListener(e: any) {
    setIsDarkTheme(e.matches);
  }

  // useEffect(() => {
  //   const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
  //   darkThemeMq.addEventListener(mqListener);
  //   return () => darkThemeMq.removeEventListener(mqListener);
  // }, []);

  return isDarkTheme;
};

export default useDarkTheme;
