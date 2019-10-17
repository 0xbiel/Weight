import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {text: ''};
  };
  
  textChange(event) {
    this.setState({text: event.target.value});
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>WEIGHT</h1>
          <p>Generate text with different weights in real time!</p>
          <input
            type="text"
            onKeyUp={this.textChange.bind(this)}
          />

          <div className="out">
            <p className="thin">{this.state.text}</p>
            <p className="extra-light">{this.state.text}</p>
            <p className="light">{this.state.text}</p>
            <p className="regular">{this.state.text}</p>
            <p className="medium">{this.state.text}</p>
            <p className="semi-bold">{this.state.text}</p>
            <p className="bold">{this.state.text}</p>
            <p className="extra-bold">{this.state.text}</p>
            <p className="black">{this.state.text}</p>
          </div>
        </header> 
        <footer>
          <p>Made with ♥  by <a href="https://gabrielpolastrini.com" target="_blank" rel="noopener noreferrer">Gabriel Polastrini</a></p>
        </footer>
      </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
