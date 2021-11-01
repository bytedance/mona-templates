import React from 'react';
import { Link } from '@ecom/mona'
import logo from '@/common/imgs/logo.svg';
import Wrapper from '@/components/Wrapper';
import styles from './index.<%= data.cssExt %>';

const Home = () => {
  return (
    <Wrapper>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
        <p>Edit <code>src/containers/Home/index.tsx</code> and save to reload</p>
        <ul className={styles.list}>
          <li className={styles.link}><Link to="/pages/Info/index">Click me to navigate <code>/pages/Info/index</code></Link></li>
          <li className={styles.link}><Link to="/pages/List/index">Click me to navigate <code>/pages/List/index</code></Link></li>
        </ul>
      </header>
    </Wrapper>
  )
}

export default Home;