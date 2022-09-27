import React from 'react';
import { Navigator } from '@bytedance/mona-runtime'
import logo from '@/common/imgs/logo.svg';
import Wrapper from '@/components/Wrapper';
import styles from './index.module.<%= data.cssExt %>';

const Home = () => {
  return (
    <Wrapper>
      <div className={styles.header}>
        <img className={styles.logo} src={logo} />
        <div>Edit <span>src/pages/Home/index<%- data.typescript ? '.tsx' : '.jsx' %></span> and save to reload</div>
        <div className={styles.list}>
          <div className={styles.link}><Navigator url="/pages/Info/index">Click me to navigate <span>/pages/Info/index</span></Navigator></div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Home;