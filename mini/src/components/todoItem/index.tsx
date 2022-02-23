import React from 'react';
import { View, Text } from '@bytedance/mona-runtime';
import styles from './index.module.less';
import Item from 'native://components/miniComponent/index';

const TodoItem<%- data.typescript ? ': React.FC' : '' %> = ({ children }) => {
  if (process.env.MONA_TARGET === 'mini') {
    return <Item>{children}</Item>;
  }
  return (
    <View className={styles.wrapper}>
      <Text className={styles.point}>·</Text>
      {children}
    </View>
  );
};

export default TodoItem;
