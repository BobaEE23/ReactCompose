import { Field } from "./components/Field.js";
import { Information } from "./components/Information";
import "./App.css";
import { store } from "./store.js";

export const AppLayout = () => {
  const { dispatch } = store;
  return (
    <div className="App">
      <Field></Field>
      <Information></Information>
      <button
        onClick={dispatch({ type: "restartGame" })}
        className="restart_btn"
      >
        Начать заново
      </button>
    </div>
  );
};
