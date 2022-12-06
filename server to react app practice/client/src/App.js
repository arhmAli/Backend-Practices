// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
import React from "react";
import { Component } from 'react'
import axios from 'axios'
class App extends Component {
  onSubmitCar() {
    axios.post('/api/addcar', {
      name: "Honda-Civic",
      model: 2015,
      availibilty: true,
      yearLaunched: 2015
    }).then(res => {
      console.log(res.data)
    })
  }
  render() {
    return (
      <div>
        <button onClick={() => this.onSubmitCar()}>Add user</button>
      </div>
    )
  }
}

export default App;
