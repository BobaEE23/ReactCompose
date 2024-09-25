import { reducer } from "./reducer";

const createStore = (reducer) => {
  let state;
  let listeners = [];
  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((l) => l());
  };
  const subcribe = (listener) => {
    listeners.push(listener);
  };

  return {
    getState,
    dispatch,
    subcribe,
  };
};

export const store = createStore(reducer);
