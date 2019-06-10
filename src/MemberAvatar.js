import React, { Component } from 'react';

class MemberAvatar extends Component {
  render() {
    return(
      <img
        alt={`member-with-${this.props.uuid}`}
        src={`http://robohash.org/${this.props.uuid}`}
        style={styles.circle}
      />
    );
  }
}

const styles = {
  circle: {
    borderRadius: 50,
    height: 100,
    width: 100,
    backgroundColor: '#000'
  }
}

export { MemberAvatar };
