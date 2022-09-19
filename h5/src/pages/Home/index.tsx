import React from 'react';
import { Navigator, View, Text, Image } from '@bytedance/mona-runtime'
import logo from '@/common/imgs/logo.svg';
import Wrapper from '@/components/Wrapper';
import styles from './index.module.<%= data.cssExt %>';

const Home = () => {
  return (
    <Wrapper>
      <View className={styles.header}>
        <Image className={styles.logo} src={logo} />
        <View>Edit <Text>src/pages/Home/index<%- data.typescript ? '.tsx' : '.jsx' %></Text> and save to reload</View>
        <View className={styles.list}>
          <View className={styles.link}><Navigator url="/pages/Info/index">Click me to navigate <Text>/pages/Info/index</Text></Navigator></View>
        </View>
      </View>
    </Wrapper>
  )
}

export default Home;