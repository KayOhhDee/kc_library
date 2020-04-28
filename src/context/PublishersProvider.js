import React, {createContext, useReducer} from 'react';
import {publishersReducer} from '../reducers/publishersReducer';

export const PublishersContext = createContext();

const PublishersProvider = props => {
  const [publishers, dispatch] = useReducer(publishersReducer, []);

  return (
    <PublishersContext.Provider value={{publishers, dispatch}}>
      {props.children}
    </PublishersContext.Provider>
  );
}

export default PublishersProvider;
