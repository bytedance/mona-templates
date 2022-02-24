import React from 'react';
import { View, Mona } from '@bytedance/mona-runtime';

class Info extends React.Component {
  state = {};
  onLoad() {
    Mona.setNavigationBarTitle({
      title: 'new Info Title',
    });
  }
  render() {
    return <View>Info Page 这是一个class组件</View>;
  }
}

export default Info;
