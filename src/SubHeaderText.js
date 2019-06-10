import React, { Component } from 'react';

class SubHeaderText extends Component {
  render() {
    return (
      <div style={styles.SubHeaderText}>
        {this.props.text}
      </div>
    );
  }
}

const styles = {
  SubHeaderText: {
    fontFamily: 'Avenir Next',
    fontSize: 19,
    fontWeight: '600',
  }
}

export { SubHeaderText };
