import React from 'react';

export default props => {
   return (
      <div className="container mx-auto max-w-container px-4">
         <header className="flex justify-between items-center h-24">
            <h1 className="text-2xl font-bold dark:text-white">
               <span className="text-main">React</span> Notes
            </h1>
            <button
               onClick={() => props.handleDarkMode()}
               className="border-2 border-main rounded p-1 hover:bg-main hover:text-white dark:bg-white dark:hover:bg-main"
            >
               Toggle Mode
            </button>
         </header>
      </div>
   );
};
