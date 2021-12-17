import React, { Component } from "react";

export class Form extends Component {
   constructor(props) {
      super(props);
      this.state = {
         username: "Anthony",
         age: "",
      };
      this.handleSubmit.bind(this);
   }
   async handleSubmit(e, state) {
      e.preventDefault();
      //console.log, send data to api endpoint, store to local storage
      console.log(state.username, state.age);
      window.localStorage.setItem("Person", JSON.stringify(state));
      const person = window.localStorage.getItem("Person");
      console.log(JSON.parse(person));
   }
   render() {
      return (
         <form onSubmit={(e) => this.handleSubmit(e, this.state)}>
            <input
               type="text"
               name="name"
               id="name"
               value={this.state.username}
               onChange={(e) => this.setState({ username: e.target.value })}
            />
            <input
               type="number"
               name="age"
               id="age"
               value={this.state.age}
               onChange={(e) => this.setState({ age: e.target.value })}
            />
            <button>Submit</button>
         </form>
      );
   }
}
