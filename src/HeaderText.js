import React, { Component } from 'react';

class HeaderText extends Component {
  render() {
    return (
      <div style={styles.headerText}>
        {this.props.text}
      </div>
    );
  }
}

const styles = {
  headerText: {
    fontFamily: 'Avenir Next',
    fontSize: 35,
    fontWeight: 'bold',
  }
}

export { HeaderText };
