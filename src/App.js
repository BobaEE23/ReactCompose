import { AppLayout } from "./AppLayout";
import { useState } from "react";

export const App = () => {
  const [currentPlayer, setCurrentPlayer] = useState("x");
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  const [field, setField] = useState(["", "", "", "", "", "", "", "", ""]);
  const restartGame = () => {
    setCurrentPlayer("x");
    setIsGameEnded(false);
    setIsDraw(false);
    setField(["", "", "", "", "", "", "", "", ""]);
  };
  return (
    <AppLayout
      field={field}
      setField={setField}
      isDraw={isDraw}
      isGameEnded={isGameEnded}
      setIsGameEnded={setIsGameEnded}
      currentPlayer={currentPlayer}
      setCurrentPlayer={setCurrentPlayer}
      setIsDraw={setIsDraw}
      restartGame={restartGame}
    ></AppLayout>
  );
};
