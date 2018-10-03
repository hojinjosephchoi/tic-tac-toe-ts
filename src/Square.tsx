import * as React from 'react';

interface SquareProps {
  value: 'O' | 'X';
  onClick(): void;
}

export default class Square extends React.Component<SquareProps, Readonly<{}>> {
  render() {
    return (
      <button className="square" onClick={this.props.onClick.bind(this, null)}>
        {this.props.value}
      </button>
    )
  }
}