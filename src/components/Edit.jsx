import React, { Component } from 'react';

export default class Edit extends Component {
   constructor(props) {
      super(props);
      this.state = {
         newTextValue: this.props.newTextValue,
      };
   }

   handleSubmit = e => {
      e.preventDefault();
      this.props.handleIsEditing(false);
      this.props.setText(this.state.newTextValue);
   };

   render() {
      return (
         <li className="min-h-[170px] bg-main flex gap-1 flex-col p-2 rounded-xl">
            <textarea
               value={this.state.newTextValue}
               onChange={e => this.setState({ newTextValue: e.target.value })}
               className="bg-main placeholder:text-white text-white p-1 resize-none outline-none h-full"
               placeholder="Type something..."
            ></textarea>
            <form className="flex justify-center" onSubmit={this.handleSubmit}>
               <button
                  type="submit"
                  className="text-black hover:bg-main hover:text-white py-1 px-2 bg-white border-black border-2 rounded-xl"
               >
                  Save Item
               </button>
            </form>
         </li>
      );
   }
}
