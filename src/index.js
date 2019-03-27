import React from 'react';
import {render} from 'react-dom';

const initialState = [3, 2, 1];

const AddNumber = ({onClick = () => {}}) => {
    <button onClick={onClick}>+</button>
};

class List extends React.PureComponent {
  render() {
    return (
      <ul>
      {this.props.list.map((n, idx) => (
        <li key={idx}>{n}</li>
      ))}
      </ul>
    );
  }
}

class App extends React.Component {
  state = {
    list: [...initialState],
  }

  _addNumber() {
    this.state.list.unshift(this.state.list.length + 1);
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <div>rendered at {Date.now()}</div>
        <div>with list {this.state.list.join(',')}</div>
        <List list={this.state.list} />
        <AddNumber onClick={this._addNumber} />
      </div>
    );
  }
};

render(<App/>, document.getElementById('app'));
