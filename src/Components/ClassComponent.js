import React, { Component } from "react";
import FunctionalComponent from "./FunctionalComponent";

export default class ClassComponent extends Component {
   constructor(props) {
      super(props);
      //this is how to write state in class component
      this.state = {
         username: "",
         password: "",
      };

      this.handleClick.bind(this);
      // const handleSubmit = () => {
      //    console.log("submit");
      // };

      // const handleChange = () => {};
   }
   handleClick(e) {
      e.preventDefault();
      console.log(this.state.username);
      console.log(this.state.password);
      console.log("Logged in");
   }

   render() {
      //You can have javascript code right here in the render method before the return statement
      console.log(this.state);
      return (
         <>
            <form>
               <label for="user">
                  Username
                  <input
                     type="text"
                     id="user"
                     name="user"
                     onChange={(e) =>
                        this.setState((state) => ({
                           username: (state.username = e.target.value),
                        }))
                     }
                     value={this.state.username}
                  />
               </label>
               <label for="password">
                  Password
                  <input
                     type="password"
                     id="password"
                     name="password"
                     onChange={(e) => {
                        this.setState((state) => ({
                           password: (state.password = e.target.value),
                        }));
                     }}
                     value={this.state.password}
                  />
               </label>
               <button>Submit</button>
            </form>
         </>
      );
   }
}
