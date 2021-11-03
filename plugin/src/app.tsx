import React from 'react';
import '@/common/styles/base.<%= data.cssExt %>';

const App: React.FC = ({ children }) => {
  return (
    <div>{children}</div>
  )
}

export default App;
