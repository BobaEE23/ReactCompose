import "../App.css";
import { store } from "../store";
import { useEffect, useState } from "react";

export const InformationLayout = () => {
  const [data, setData] = useState(store.getState());
  const { getState, subcribe } = store;
  useEffect(() => {
    subcribe(() => setData(getState()));
  }, []);

  return (
    <>
      {getState().isDraw ? (
        <div>Ничья</div>
      ) : !getState().isDraw && getState().isGameEnded ? (
        <div>Победа {getState().currentPlayer}</div>
      ) : !getState().isDraw && !getState().isGameEnded ? (
        <div>Ходит {getState().currentPlayer}</div>
      ) : (
        console.log("ничего")
      )}
    </>
  );
};
