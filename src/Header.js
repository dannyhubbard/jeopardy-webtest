
import React, { Component } from 'react';

class Header extends Component {
  render() {
    let styles = { fontSize: '3rem' };
    let offset = this.props.title.length / 6;
    styles['fontSize'] = 3 - offset / 2 - 0.1 + 'rem';
    return (
      <div className="Header" style={styles}>
        {this.props.title}
      </div>
    );
  }
}

export default Header;
