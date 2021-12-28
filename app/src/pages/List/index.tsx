import Wrapper from '@/components/Wrapper';
import { Link, View, Text } from '@bytedance/mona-runtime';
import React from 'react';

const List = () => {
  return (
    <Wrapper>
      <View>
        <View>I am route page <Text>/pages/List/index</Text></View>
        <View><Link to="pages/home/index">back to <Text>/pages/Home/index</Text></Link></View>
      </View>
    </Wrapper>
  )
}

export default List;