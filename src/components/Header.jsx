import React from 'react';

export default () => {
   return (
      <div className="container mx-auto max-w-container">
         <header className="flex justify-between items-center px-4 h-24">
            <h1 className="text-2xl font-bold">
               <span className="text-main">React</span> Notes
            </h1>
            <button className="border-2 border-main rounded p-1 hover:bg-main hover:text-white">
               Toggle Mode
            </button>
         </header>
      </div>
   );
};
