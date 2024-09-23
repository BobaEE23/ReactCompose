import { Field } from "./components/Field.js";
import { Information } from "./components/Information";
import "./App.css";

export const AppLayout = ({ dispatch, getState }) => {
  return (
    <div className="App">
      <Field dispatch={dispatch} getState={getState}></Field>
      <Information getState={getState}></Information>
      <button
        onClick={dispatch({ type: "restartGame" })}
        className="restart_btn"
      >
        Начать заново
      </button>
    </div>
  );
};
