import React from 'react';
import '@/common/styles/base.<%= data.cssExt %>';

const App<%- data.typescript ? ': React.FC' : '' %> = ({ children }) => {
  return (
    <div style={{ height: '100%' }}>{children}</div>
  )
}

export default App;
