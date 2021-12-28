import React from 'react';
import { View } from '@bytedance/mona-runtime';
import styles from './index.module.<%= data.cssExt %>';

const Wrapper<%- data.typescript ? ': React.FC' : '' %> = ({ children }) => {
  return <View className={styles.container}>{children}</View>
}

export default Wrapper;