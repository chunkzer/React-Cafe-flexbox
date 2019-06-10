import React, { Component } from 'react';

class ClickableText extends Component {
  render() {
    return (
      <div style={styles.clickableText}>
        {this.props.text}
      </div>
    );
  }
}

const styles = {
  clickableText: {
    fontFamily: 'Avenir Next',
    fontSize: 19,
    fontWeight: '600',
    color: '#00a2c7',
  }
}

export { ClickableText };
