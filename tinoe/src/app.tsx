import React, { useReducer } from 'react';

const initData = ['mona'];

export const TodoContext = React.createContext<%= data.typescript ? '<{ state: string[]; dispatch: any }>' : '' %>({ state: [], dispatch: () => {} });

const reducer = (state<%= data.typescript ? ': string[]' : '' %>, action<%= data.typescript ? ': any' : '' %>)<%= data.typescript ? ': string[]' : '' %> => {
  switch (action.type) {
    case 'add':
      const { data } = action.payload;
      return [...state, data];
    case 'delete':
      const { index } = action.payload;
      state.splice(index, 1);
      return [...state];
    default:
      return state;
  }
};
const App<%= data.typescript ? ': React.FC' : ''%> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initData);
  return <TodoContext.Provider value={{ state, dispatch }}>{children}</TodoContext.Provider>;
};

export default App;
