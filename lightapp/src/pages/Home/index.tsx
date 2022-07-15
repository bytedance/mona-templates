import React from 'react';
import { Link } from '@bytedance/mona-runtime'
import logo from '@/common/imgs/logo.svg';
import Wrapper from '@/components/Wrapper';
import styles from './index.module.<%= data.cssExt %>';

const Home = () => {
  return (
    <Wrapper>
      <header className={styles.header}>
        <img className={styles.logo} src={logo} />
        <p>Edit <code>src/pages/Home/index<%- data.typescript ? '.tsx' : '.jsx' %></code> and save to reload</p>
        <ul className={styles.list}>
          <li className={styles.link}><Link to="/pages/Info/index">Click me to navigate <code>/pages/Info/index</code></Link></li>
          <li className={styles.link}><Link to="/pages/List/index">Click me to navigate <code>/pages/List/index</code></Link></li>
        </ul>
      </header>
    </Wrapper>
  )
}

export default Home;