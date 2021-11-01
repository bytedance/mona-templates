import Wrapper from '@/components/Wrapper';
import { Link, PageProps } from '@bytedance/mona-runtime';
import React from 'react';

const Info: React.FC<PageProps> =({ search, searchParams }) => {
  console.log(search, searchParams);
  return (
    <Wrapper>
      <div>
        <h2>I am route page <code>/pages/Info/index</code></h2>
        <div><Link to="pages/home/index">back to <code>/pages/Home/index</code></Link></div>
      </div>
    </Wrapper>
  )
}

export default Info;