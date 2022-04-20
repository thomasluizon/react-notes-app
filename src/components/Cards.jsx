import React, { Component } from 'react';
import AddCard from './AddCard';
import Note from './Note';
import Edit from './Edit';

export default class Cards extends Component {
   constructor(props) {
      super(props);
      const notes = JSON.parse(localStorage.getItem('notes-data'));
      this.state = {
         notes: notes || [],
         isEditing: false,
         newTextValue: '',
         noteId: '',
      };
   }

   addNote = data => {
      this.state.notes.splice(0, 0, data);
      this.setState({
         notes: this.state.notes,
      });
   };

   removeItem = noteIndex => {
      this.state.notes.splice(noteIndex, 1);
      this.setState({ notes: this.state.notes });
   };

   editItem = key => {
      this.setState({ isEditing: true, noteId: key });
      this.state.notes.forEach(note => {
         if (note.id == key) {
            this.setState({ newTextValue: note.text });
         }
      });
   };

   setText = text => {
      this.state.notes.forEach(note => {
         if (note.id == this.state.noteId) {
            note.text = text;
         }
      });
   };

   saveLocal = () => {
      localStorage.setItem('notes-data', JSON.stringify(this.state.notes));
   };

   handleIsEditing = isEditing => {
      this.setState({ isEditing });
   };

   componentDidMount() {
      window.addEventListener('beforeunload', this.saveLocal);
   }

   componentWillUnmount() {
      window.removeEventListener('beforeunload', this.saveLocal);
   }

   render() {
      return (
         <ul className="container mx-auto max-w-container px-4 py-2 grid grid-cols-main gap-2">
            {this.state.isEditing ? (
               <Edit
                  setText={this.setText}
                  newTextValue={this.state.newTextValue}
                  handleIsEditing={this.handleIsEditing}
               />
            ) : (
               <>
                  <Note
                     passInfo={this.passInfo}
                     editItem={this.editItem}
                     notes={this.state.notes}
                     removeItem={this.removeItem}
                     filter={this.props.filter}
                  />
                  <AddCard addNote={this.addNote} />
               </>
            )}
         </ul>
      );
   }
}
