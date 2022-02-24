import React from 'react';
import { View, Text } from '@bytedance/mona-runtime';

const Home<%- data.typescript ? ': React.FC' : '' %> = ({ text }) => {
  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
};

export default Home;
