import React, { Component } from 'react';

class App extends Component {
  state = {
    count: 0
  };

  countUp = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  resetbtn = () => {
    this.setState({
      count: 0
    });
  };

  render() {
    return (
      <div className="App">
        <div className="props">
          <span>{this.props.message}</span>
        </div>

        <div>{this.state.count}</div>
        <button onClick={this.countUp}>Do you wanna count up?</button>
        <button onClick={this.resetbtn}>Reset</button>
      
        <div className="inside-app-props">
          <InsideApp
            count={this.state.count}
            countUp={this.countUp}
          />
        </div>
      </div>
    );
  }
}

class InsideApp extends Component {
  render() {
    return (
      <div>
        {this.props.count}
        <button onClick={this.props.countUp}>Click Me!</button>
      </div>
    );
  }
}

export default App;
