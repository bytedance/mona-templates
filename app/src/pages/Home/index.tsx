import React from 'react';
import { Link, View, Text } from '@bytedance/mona-runtime'
import Logo from '@/common/imgs/logo.svg';
import Wrapper from '@/components/Wrapper';
import styles from './index.module.<%= data.cssExt %>';

const Home = () => {
  return (
    <Wrapper>
      <View className={styles.header}>
        <Logo className={styles.logo} />
        <View>Edit <Text>src/pages/Home/index<%- data.typescript ? '.tsx' : '.jsx' %></Text> and save to reload</View>
        <View className={styles.list}>
          <View className={styles.link}><Link to="/pages/Info/index">Click me to navigate <Text>/pages/Info/index</Text></Link></View>
          <View className={styles.link}><Link to="/pages/List/index">Click me to navigate <Text>/pages/List/index</Text></Link></View>
        </View>
      </View>
    </Wrapper>
  )
}

export default Home;