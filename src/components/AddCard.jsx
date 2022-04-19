import React, { Component } from 'react';

export default class AddCard extends Component {
   constructor(props) {
      super(props);
   }

   state = {
      textValue: '',
   };

   generateRandomKey = l => {
      let result = '';
      let characters =
         'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      for (let i = 0; i < l; i++) {
         let randomCharNum = Math.floor(Math.random() * characters.length);
         result += characters.charAt(randomCharNum);
      }
      return result;
   };

   handleAddNote = () => {
      const note = {
         id: this.generateRandomKey(20),
         text: this.state.textValue,
         isEditing: false,
      };

      this.props.addNote(note);
      this.setState({ textValue: '' });
   };

   render() {
      return (
         <li className="min-h-[170px] bg-main flex gap-1 flex-col p-2 rounded-xl">
            <textarea
               value={this.state.textValue}
               onChange={e => this.setState({ textValue: e.target.value })}
               className="bg-gradient-main placeholder:text-white text-white p-1 resize-none outline-none h-full"
               placeholder="Type to add a new note..."
            ></textarea>
            <div className="flex justify-end">
               <button
                  onClick={this.handleAddNote}
                  className="text-white bg-black rounded-xl py-0.5 px-1.5 border-2 border-emerald-700 hover:bg-main"
               >
                  Save
               </button>
            </div>
         </li>
      );
   }
}
