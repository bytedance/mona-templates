import React from 'react';
import { Button, View, Navigator, usePageEvent, Mona, Image } from '@bytedance/mona-runtime';
import styles from './index.module.<%= data.cssExt %>';

const Home = () => {
  usePageEvent('onLoad', () => {
    Mona.setNavigationBarTitle({
      title: 'Mona Tinoe',
    });
  });
  usePageEvent('onShow', () => {});
  usePageEvent('onReady', () => {});
  usePageEvent('onHide', () => {});
  usePageEvent('onUnload', () => {});

  const handleMore = () => {
    // @ts-ignore xxx
    tt.navigateToMiniProgram({ appId: "tt4631308cd90f718601" });
  };

  return (
    <View className={styles.wrapper}>
      <View className={styles.list}>
        <View className={styles.link}>
          <Image className={styles.logo} src="https://tinoe.bytedance.com/img/tinoe-logo-reverse.png" />
          <Navigator url="/pages/Interaction/index">
            <Button>交互</Button>
          </Navigator>
          <Navigator url="/pages/Model/index">
            <Button>模型加载</Button>
          </Navigator>
          <Button onTap={handleMore}>更多案例</Button>
        </View>
        <View className={styles.homepage}>
          Tinoe官网: https://tinoe.bytedance.com
        </View>
      </View>
    </View>
  );
};

export default Home;
