import React from 'react';
import styles from './index.<%= data.cssExt %>';

const Wrapper<%= data.typescript ? ': : React.FC' : '' %> = ({ children }) => {
  return <div className={styles.container}>{children}</div>
}

export default Wrapper;