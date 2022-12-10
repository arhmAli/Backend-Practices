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

  state = {
    cars: []
  }
  componentDidMount() {
    this.getCars()
  }
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
  getCars = () => {
    axios.get('/api/getcars')
      .then(response => {
        this.setState({ cars: response.data })
      })

  }
  onCarRemove() {
    axios.post('/api/removecar', {
      yearLaunched: 2015
    }).then(res => {
      this.getCars()
    })

  }
  render() {
    return (
      <div>
        <span>Check the console !</span>
        <hr />
        <button onClick={() => this.onSubmitCar()}>Add a car</button>
        <hr />
        <button onClick={() => this.onCarRemove()}>Remove a car</button>

        <button>{this.state.cars.map((item, index) =>
          <div>{item.name}</div>
        )}</button>
      </div>
    )
  }
}

export default App;
