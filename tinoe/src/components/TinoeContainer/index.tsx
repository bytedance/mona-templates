import React, { createContext, useState } from 'react';
import { Canvas, View, useMiniEffect, usePageEvent } from '@bytedance/mona-runtime';
import { Stage<%= data.typescript ? ', TinoeStageProps' : '' } from 'tinoe';
import styles from './index.module.<%= data.cssExt %>';

<% if(data.typescript) { %>
export interface TinoeContainerProps {
  children: React.ReactNode;
  tinoeProps?: TinoeStageProps;
}
<% } %>

export const TinoeContext = createContext<%= data.typescript ? '<{ stage?: Stage }>' : '' %>({});

const TinoeContainer = ({ children, tinoeProps = {} }<%= data.typescript ?': TinoeContainerProps' : '' %>) => {
  const [stage, setStage] = useState<%= data.typescript ? '<Stage>' : '' %>();

  const dispatch = (e<%= data.typescript ? ': any' : '' %>) => {
    stage && stage.canvas.dispatch(e);
  };
  const initStage = () => {
    // @ts-ignore xxx
    tt.createSelectorQuery()
      .select('#canvas_type_webgl')
      .node()
      .exec((res<%= data.typescript ? ': any' : '' %>) => {
        const canvas = res[0].node;
        const tinoeStage = new Stage({ canvas, ...tinoeProps });
        setStage(tinoeStage);
      });
  };

  useMiniEffect(() => {
    initStage();
  }, []);

  usePageEvent('onUnload', () => {
    stage && stage.destroy();
  });

  return (
    <View style={styles.tinoe}>
      <Canvas
        onTap={dispatch}
        onTouchCancel={dispatch}
        onTouchStart={dispatch}
        onTouchEnd={dispatch}
        onTouchMove={dispatch}
        id="canvas_type_webgl"
        type="webgl"
        style={{ width: '100vw', height: '100vh' }}
        canvasId="canvas_type_webgl"></Canvas>
      <TinoeContext.Provider value={{ stage }}>
        <View style={styles.container}>{children}</View>
      </TinoeContext.Provider>
    </View>
  );
};

export default TinoeContainer;
