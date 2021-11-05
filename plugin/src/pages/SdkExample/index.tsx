import Wrapper from '@/components/Wrapper';
import { Link, pigeon } from '@bytedance/mona-runtime';
import React, { useState, useEffect } from 'react';

import ReactJson from 'react-json-view';
import styles from './index.module.<%= data.cssExt %>';

const SdkExample = () => {
  const [data, setData] = useState({ copy: {}, show: {}, customerInfo: {}, init: {} });
  useEffect(() => {
    // 插件前台展示
    pigeon.onShow(data => {
      setData(d => ({
        ...d,
        show: JSON.parse(JSON.stringify(data))
      }));
    });

    pigeon.onCurrentCustomerChange(data => {
      console.log({ data });
      setData(d => ({
        ...d,
        customerInfo: JSON.parse(JSON.stringify(data))
      }));
    });

    pigeon.getInitInfo({
      success: data => {
        setData(d => ({
          ...d,
          init: { data: JSON.parse(JSON.stringify(data)) }
        }));
        setData(d => ({
          ...d,
          customerInfo: JSON.parse(JSON.stringify({ user_id: data.user_id }))
        }));
      },
      failed: error => {
        setData(d => ({
          ...d,
          init: { error: JSON.parse(JSON.stringify(error)) }
        }));
      }
    });
  }, []);

  const handleCopy = () => {
    pigeon.addToInputBoxSafely({
      data: '这是一段文字',
      success: data => {
        setData(d => ({
          ...d,
          copy: { data: data }
        }));
      },
      failed: error => {
        setData(d => ({
          ...d,
          copy: { error: JSON.parse(JSON.stringify(error)) }
        }));
      }
    });
  };

  return (
    <div className={styles.container}>
      <Block title={`当前环境 : ${(window as any ).__MARFISH__ ? '微前端' : '非微前端'}`}></Block>
      <Block title='复制能力'>
        <>
          <button onClick={handleCopy}>复制</button>
          <ReactJson src={data.copy} name={false} />
        </>
      </Block>
      <Block title='自定义按钮携带参数'>
        <>
          <ReactJson src={data.show} name={false} />
          {data.show && showFromMap[data.show.showFrom]}
        </>
      </Block>
      <Block title='当前顾客UserOpenId'>
        <ReactJson src={data.customerInfo} name={false} />
      </Block>
      <Block title='初始化参数'>
        <ReactJson src={data.init} name={false} />
      </Block>
    </div>
  );
};

export default SdkExample;


<%- data.typescript ? 
`interface IProps {
  title: string;
}` : '' %>


const Block<%- data.typescript ? ': React.FC<IProps>' : '' %> = ({ children, title }) => {
  return (
    <div>
      <header className={styles.header}>{title}</header>
      {children}
    </div>
  );
};

const showFromMap = {
  0: '从tab进入',
  1: '店铺单进入',
  2: '商品单进入',
  3: '售后单进入',
  4: '商品列表进入'
};
