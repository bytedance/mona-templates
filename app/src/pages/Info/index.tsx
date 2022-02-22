import React from 'react';
import { View, setNavigationBarTitle } from '@bytedance/mona-runtime';

class Info extends React.Component {
  state = {};
  onLoad() {
    setNavigationBarTitle({
      title: 'new Info Title',
    });
  }
  render() {
    return <View>Info Page 这是一个class组件</View>;
  }
}

export default Info;
