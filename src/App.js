import "./App.css";

import React, { Component } from "react";

class App extends Component {
   constructor(prop) {
      super();
      this.state = {
         input: "",
      };
   }
   render() {
      return (
         <div className="App">
            <h1>Welcome to react</h1>
            {console.log(this.state.input)}
            <input
               type="text"
               name="name"
               id="name"
               value={this.state.input}
               onChange={(e) => this.setState({ input: e.target.value })}
            />
         </div>
      );
   }
}

export default App;
