import { AppLayout } from "./AppLayout";

import { createStore } from "./store";
import { reducer } from "./reducer";

export const App = () => {
  const store = createStore(reducer);
  const { dispatch, getState } = store;

  return <AppLayout dispatch={dispatch} getState={getState}></AppLayout>;
};
