import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKeys } from 'app/providers/StoreProvider/config/StateSchema';
import React, { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducerList = {
  [name in StateSchemaKeys]?: Reducer;
};
type ReducerListEntry = [StateSchemaKeys, Reducer];
interface DynamicModuleLoaderProps {
  name: StateSchemaKeys;
  reducers: ReducerList;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: React.FC<DynamicModuleLoaderProps> = ({
  children,
  name,
  reducers,
  removeAfterUnmount,
}) => {
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
      store.reducerManager.add(name, reducer);
      dispatch({ type: `@INIT ${name} reducer` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(
          ([name, reducer]: ReducerListEntry) => {
            store.reducerManager.remove(name);
            dispatch({ type: `@DESTROY ${name} reducer` });
          },
        );
      }
    };
  }, []);

  // eslint-disable-next-line
  return <>{children}</>;
};
