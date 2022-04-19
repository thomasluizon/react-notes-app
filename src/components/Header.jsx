import React, { useState } from 'react';
import useDarkMode from '../hook/useDarkMode';

export default () => {
   const isDarkTrue = localStorage.getItem('darkmode') == 'true';
   const [darkMode, setDarkMode] = useState(isDarkTrue);
   useDarkMode(darkMode);

   return (
      <div className="container mx-auto max-w-container px-4">
         <header className="flex justify-between items-center h-24">
            <h1 className="text-2xl font-bold dark:text-white">
               <span className="text-main">React</span> Notes
            </h1>
            <button
               onClick={() => setDarkMode(!darkMode)}
               className="border-2 border-main rounded p-1 hover:bg-main hover:text-white dark:bg-white dark:hover:bg-main"
            >
               Toggle Mode
            </button>
         </header>
      </div>
   );
};
