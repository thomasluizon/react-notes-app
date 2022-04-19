import React, { Component } from 'react';
import AddCard from './AddCard';
import Notes from '../hook/Notes';

export default class Cards extends Component {
   constructor(props) {
      super(props);
   }

   state = {
      notes: [],
      newText: '',
      isEditing: false,
   };

   addNote = data => {
      const actualNotes = this.state.notes;
      this.setState({
         notes: [data, ...actualNotes],
      });
   };

   removeItem = noteIndex => {
      const newNotes = this.state.notes.filter((e, index) => {
         return noteIndex !== index;
      });

      this.setState({ notes: newNotes });
   };

   editItem = (note, noteIndex) => {
      note.isEditing = !note.isEditing;
      const actualNotes = this.state.notes;
      actualNotes.splice(noteIndex, 1);
      actualNotes.splice(noteIndex, 0, note);

      this.setState({
         isEditing: true,
         notes: [...actualNotes],
         newText: note.text,
      });
   };

   finishEditItem = (note, noteIndex) => {
      note.isEditing = !note.isEditing;
      note.text = this.state.newText;
      const actualNotes = this.state.notes;
      actualNotes.splice(noteIndex, 1);
      actualNotes.splice(noteIndex, 0, note);

      this.setState({ isEditing: false, notes: [...actualNotes], newText: '' });
   };

   render() {
      return (
         <ul className="container mx-auto max-w-container px-4 py-2 grid grid-cols-main gap-2">
            {this.state.notes.map((note, noteIndex) => {
               return (
                  <li
                     key={note.id}
                     className="min-h-[170px] bg-main flex gap-1 flex-col p-2 rounded-xl"
                  >
                     <textarea
                        value={note.isEditing ? this.state.newText : note.text}
                        onChange={e =>
                           this.setState({ newText: e.target.value })
                        }
                        className="bg-main placeholder:text-white text-white p-1 resize-none outline-none h-full"
                        placeholder="Type something..."
                        disabled={note.isEditing ? false : true}
                     ></textarea>
                     <div className="flex justify-between align-center">
                        <small>{note.date}</small>
                        <div className="flex gap-4">
                           {this.state.isEditing && note.isEditing ? (
                              <button
                                 onClick={() =>
                                    this.finishEditItem(note, noteIndex)
                                 }
                              >
                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-save-fill hover:text-white"
                                    viewBox="0 0 16 16"
                                 >
                                    <path d="M8.5 1.5A1.5 1.5 0 0 1 10 0h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h6c-.314.418-.5.937-.5 1.5v7.793L4.854 6.646a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l3.5-3.5a.5.5 0 0 0-.708-.708L8.5 9.293V1.5z" />
                                 </svg>
                              </button>
                           ) : this.state.isEditing && !note.isEditing ? (
                              ''
                           ) : (
                              <button
                                 onClick={() => this.editItem(note, noteIndex)}
                              >
                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-pencil-fill hover:text-white"
                                    viewBox="0 0 16 16"
                                 >
                                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                                 </svg>
                              </button>
                           )}

                           <button onClick={() => this.removeItem(noteIndex)}>
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 width="16"
                                 height="16"
                                 fill="currentColor"
                                 className="bi bi-trash3-fill hover:text-white"
                                 viewBox="0 0 16 16"
                              >
                                 <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                              </svg>
                           </button>
                        </div>
                     </div>
                  </li>
               );
            })}
            <AddCard addNote={this.addNote} />
         </ul>
      );
   }
}
