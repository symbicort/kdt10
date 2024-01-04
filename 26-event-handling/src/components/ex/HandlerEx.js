import react, { Component } from 'react';

class HandlerEx extends Component {
  state = { number: 0 };
  render() {
    const { number } = this.state;
    if (number == 0) {
      return (
        <div>
          <h2>Hello World!</h2>
          <button onClick={() => this.setState({ number: number + 1 })}>
            버튼
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <h2>GoodBye World!</h2>
          <button onClick={() => this.setState({ number: number + 1 })}>
            버튼
          </button>
        </div>
      );
    }
  }
}

export default HandlerEx;
