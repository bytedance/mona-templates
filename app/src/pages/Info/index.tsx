import Wrapper from '@/components/Wrapper';
import { View, Text, Link<%= data.typescript ? ', PageProps' : '' %> } from '@bytedance/mona-runtime';
import React from 'react';

const Info<%- data.typescript ? ': React.FC<PageProps>' : '' %> = ({ search, searchParams }) => {
  console.log(search, searchParams);
  return (
    <Wrapper>
      <View>
        <View>I am route page <Text>/pages/Info/index</Text></View>
        <View><Link to="pages/home/index">back to <Text>/pages/Home/index</Text></Link></View>
      </View>
    </Wrapper>
  )
}

export default Info;