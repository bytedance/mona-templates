import { TodoContext } from '@/app';
import Wrapper from '@/components/Wrapper';
import { Input, View, Button, Mona } from '@bytedance/mona-runtime';
import React from 'react';
import styles from './index.module.<%= data.cssExt %>';

const List = () => {
  const { dispatch } = React.useContext(TodoContext);
  const inputRef = React.useRef('');
  return (
    <Wrapper>
      <View style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
        <View className={styles.title}> 请输入文本</View>
        <View className={styles.inputWrapper}>
          <Input
            type="text"
            onInput={e => {
              inputRef.current = e.detail?.value || '';
            }}
            placeholder="placeholder"
            className={styles.input}
          />
        </View>

        <Button
          onTap={() => {
            dispatch({ type: 'add', payload: { data: inputRef.current } });
            Mona.navigateBack({ delta: 1 });
          }}
        >
          添加
        </Button>
      </View>
    </Wrapper>
  );
};

export default List;
