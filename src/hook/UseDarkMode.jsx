import { useEffect } from 'react';

export default darkmode => {
   useEffect(() => {
      const root = document.documentElement;
      localStorage.setItem('darkmode', darkmode);
      const isDarkMode = localStorage.getItem('darkmode');

      if (isDarkMode == 'true') root.classList.add('dark');
      if (isDarkMode == 'false') root.classList.remove('dark');
   }, [darkmode]);
};
