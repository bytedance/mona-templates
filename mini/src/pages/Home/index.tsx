import React from 'react';
import { Button, View, Image, Navigator, usePageEvent, Mona } from '@bytedance/mona-runtime';
import Logo from '@/common/imgs/logo.svg';

import Wrapper from '@/components/Wrapper';
import Item from '@/components/Item';
import TodoItem from '@/components/todoItem';

import { TodoContext } from '@/app';

import styles from './index.module.<%= data.cssExt %>';

const Home = () => {
  const { state: todoList } = React.useContext(TodoContext);

  usePageEvent('onLoad', () => {
    Mona.setNavigationBarTitle({
      title: 'new Home Title',
    });
  });
  usePageEvent('onShow', () => {});
  usePageEvent('onReady', () => {});
  usePageEvent('onHide', () => {});
  usePageEvent('onUnload', () => {});

  return (
    <Wrapper>
      <View className={styles.wrapper}>
        <Item text={`当前环境: ${process.env.MONA_TARGET}`} />
        <Image src={Logo} />
        <View className={styles.list}>
          <View className={styles.link}>
            <Navigator url="/pages/Info/index">
              <Button>支持class组件</Button>
            </Navigator>
          </View>
          <View className={styles.link}>
            <Navigator url="/pages/List/index">
              <Button>添加TODO</Button>
            </Navigator>
          </View>
        </View>
        {todoList.map((content, idx) => {
          return <TodoItem key={idx}>{content}</TodoItem>;
        })}
      </View>
    </Wrapper>
  );
};

export default Home;
