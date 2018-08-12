import React, { Component } from 'react';

class Tile extends Component {
  constructor() {
    super();
    this.state = {
      showOverlay: false,
    };
  }
  _hoverHandler = () => {
    this.setState({ showOverlay: !this.state.showOverlay });
  };
  render() {
    const { image, hoverText } = this.props;
    const { showOverlay } = this.state;
    return (
      <div
        className="tile"
        onMouseEnter={this._hoverHandler}
        onMouseLeave={this._hoverHandler}
        style={{ backgroundImage: `url(${image})` }}
      >
        {showOverlay && <div className="tile-overlay">{hoverText}</div>}
      </div>
    );
  }
}

export default Tile;
