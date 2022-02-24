import Wrapper from '@/components/Wrapper';
import { View, Text, Mona<%= data.typescript ? ', PageProps' : '' %> } from '@bytedance/mona-runtime';
import React from 'react';

const Info<%- data.typescript ? ': React.FC<PageProps>' : '' %> = ({ search, searchParams }) => {
  console.log(search, searchParams);
  return (
    <Wrapper>
      <View>
        <View>I am route page <Text>/pages/Info/index</Text></View>
        <View><Text onTap={() => { Mona.navigateBack(); }}>back to <Text>/pages/Home/index</Text></Text></View>
      </View>
    </Wrapper>
  )
}

export default Info;