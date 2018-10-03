import * as React from 'react';
import Square from './Square';

interface BoardProps {
  squares: Array<'O' | 'X'>;
  onClick(index: number): void;
}

interface BoardState {

}
export default class Board extends React.Component<BoardProps, BoardState> {
  
  render(): JSX.Element {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }

  private renderSquare(i: number): JSX.Element {
    const squares = this.props.squares;
    return <Square value={squares[i]} onClick={this.props.onClick.bind(this, i)} />;
  }
}