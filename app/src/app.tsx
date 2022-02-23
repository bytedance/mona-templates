import React, { useReducer } from 'react';

const initData = ['mona'];

<% if(data.typescript) { %>
export const TodoContext = React.createContext<{ state: string[]; dispatch: any }>({ state: [], dispatch: () => {} });

const reducer = (state: string[], action: any): string[] => {
<%} else {%>
export const TodoContext = React.createContext({ state: [], dispatch: () => {} });

const reducer = (state, action) => {
<%} %>
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
const App<%- data.typescript ? ': React.FC' : '' %> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initData);
  return <TodoContext.Provider value={{ state, dispatch }}>{children}</TodoContext.Provider>;
};

export default App;
