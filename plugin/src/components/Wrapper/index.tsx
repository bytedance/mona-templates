import React from 'react';
import styles from './index.less';

const Wrapper: React.FC = ({ children }) => {
  return <div className={styles.container}>{children}</div>
}

export default Wrapper;