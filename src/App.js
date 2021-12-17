import "./App.css";

import React, { Component } from "react";
import Heading from "./Heading";
import Navbar from "./Navbar";
import SetUsername from "./SetUsername";
import DisplayCount from "./DisplayCount";
import SetCounter from "./SetCounter";

class App extends Component {
   constructor(prop) {
      super();
      this.state = {
         username: "username",
         count: 0,
      };
   }

   handleChange = (e) => {
      this.setState({ username: e.target.value });
   };
   handleIncrease = () => {
      this.setState((state) => ({
         count: (state.count += 1),
      }));
   };
   handleDecrease = () => {
      this.setState((state) => ({
         count: (state.count -= 1),
      }));
   };
   handleReset = () => {
      this.setState((state) => ({
         count: (state.count = 0),
      }));
   };

   render() {
      return (
         <div className="App">
            {/* <Navbar username={this.state.username} />
            <Heading username={this.state.username} />
            <SetUsername handleChange={this.handleChange} /> */}

            {/* count operation */}
            <DisplayCount count={this.state.count} />
            <SetCounter
               handleIncrease={this.handleIncrease}
               handleDecrease={this.handleDecrease}
               handleReset={this.handleReset}
            />
         </div>
      );
   }
}

export default App;
