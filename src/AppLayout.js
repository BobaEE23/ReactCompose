import { Field } from "./components/Field.js";
import { Information } from "./components/Information";
import "./App.css";

export const AppLayout = ({
  field,
  isDraw,
  setIsDraw,
  isGameEnded,
  setIsGameEnded,
  currentPlayer,
  setCurrentPlayer,
  setField,
  restartGame,
}) => {
  return (
    <div className="App">
      <Field
        field={field}
        currentPlayer={currentPlayer}
        setField={setField}
        isGameEnded={isGameEnded}
        setIsGameEnded={setIsGameEnded}
        setCurrentPlayer={setCurrentPlayer}
        isDraw={isDraw}
        setIsDraw={setIsDraw}
      ></Field>
      <Information
        isDraw={isDraw}
        isGameEnded={isGameEnded}
        currentPlayer={currentPlayer}
      ></Information>
      <button onClick={restartGame} className="restart_btn">
        Начать заново
      </button>
    </div>
  );
};
