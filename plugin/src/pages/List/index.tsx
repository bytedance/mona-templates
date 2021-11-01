import Wrapper from '@/components/Wrapper';
import { Link } from '@bytedance/mona';
import React from 'react';

const List = () => {
  return (
    <Wrapper>
      <div>
        <h2>I am route page <code>/pages/List/index</code></h2>
        <div><Link to="pages/home/index">back to <code>/pages/Home/index</code></Link></div>
      </div>
    </Wrapper>
  )
}

export default List;