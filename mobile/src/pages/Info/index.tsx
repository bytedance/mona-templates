import Wrapper from '@/components/Wrapper';
import { Mona<%= data.typescript ? ', PageProps' : '' %> } from '@bytedance/mona-runtime';
import React from 'react';

const Info<%- data.typescript ? ': React.FC<PageProps>' : '' %> = ({ search, searchParams }) => {
  console.log(search, searchParams);
  return (
    <Wrapper>
      <div>
        <div>I am route page <span>/pages/Info/index</span></div>
        <div><div onClick={() => { Mona.navigateBack(); }}>back to <span>/pages/Home/index</span></div></div>
      </div>
    </Wrapper>
  )
}

export default Info;
