import React, { Component } from 'react';
import AddCard from './AddCard';
import Note from './Note';

export default class Cards extends Component {
   constructor(props) {
      super(props);
      const notes = JSON.parse(localStorage.getItem('notes-data'));
      this.state = {
         notes: notes || [],
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

   saveLocal = () => {
      localStorage.setItem('notes-data', JSON.stringify(this.state.notes));
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
            <Note
               notes={this.state.notes}
               removeItem={this.removeItem}
               filter={this.props.filter}
            />
            <AddCard addNote={this.addNote} />
         </ul>
      );
   }
}
