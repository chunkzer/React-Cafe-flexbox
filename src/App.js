import React from 'react';
import list from './lista.png';
import { EventMembersList } from './EventMembersList';

import { HeaderText } from './HeaderText';
import { SubHeaderText } from './SubHeaderText';
import { ClickableText } from './ClickableText';

function App() {
  return (
    <div style={styles.container}>
      <div style={styles.contentContainer}>
        <img
          alt='list-of-members'
          src={list}
        />
        <div style={styles.listContainer}>
          <HeaderText text='HEADER TEXT' />
          <SubHeaderText text='SUBHEADER TEXT' />
          <ClickableText text='CLICKABLE TEXT' />
          <EventMembersList />
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#000',
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  listContainer: {
    flex: 1,
    backgroundColor: '#fff',
  }
}

export default App;
