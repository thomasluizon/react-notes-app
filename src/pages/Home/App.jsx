import React, { Component } from 'react';
import Header from '../../components/Header';
import Cards from '../../components/Cards';

export default class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         filterValue: '',
         darkMode: false,
      };
   }

   handleDarkMode = () => {
      const root = document.documentElement;
      const isDarkMode = this.state.darkMode;
      isDarkMode ? root.classList.remove('dark') : root.classList.add('dark');
      this.setState({ darkMode: !isDarkMode });
   };

   handleFilterChange = e => {
      this.setState({ filterValue: e.target.value });
   };

   render() {
      return (
         <>
            <Header handleDarkMode={this.handleDarkMode} />
            <div className="container mx-auto max-w-container px-4">
               <form className="flex gap-2 items-center border-4 rounded-lg border-main p-3 dark:bg-white">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="16"
                     height="16"
                     fill="currentColor"
                     className="bi bi-search"
                     viewBox="0 0 16 16"
                  >
                     <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                  <input
                     value={this.state.filterValue}
                     onChange={this.handleFilterChange}
                     className="outline-0 dark:bg-white"
                     type="text"
                     placeholder="Search for your notes..."
                  />
               </form>
            </div>
            <Cards
               darkMode={this.state.darkMode}
               filter={this.state.filterValue}
            />
         </>
      );
   }
}
