import { FieldLayout } from "./FieldLayout";
import { store } from "../store";
import { useState, useEffect } from "react";

const { dispatch, getState, subcribe } = store;
export const Field = () => {
  const [data, setData] = useState(store.getState());
  useEffect(() => {
    subcribe(() => setData(getState()));
  }, []);
  const WIN_PATTERNS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Варианты побед по горизонтали
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Варианты побед по вертикали
    [0, 4, 8],
    [2, 4, 6], // Варианты побед по диагонали
  ];
  const searchWinner = (arr) => {
    let winner = false;
    if (getState().currentPlayer === "x") {
      const indexesOfXSigns = arr.reduce((acc, el, index) => {
        if (el === "x") {
          acc.push(index);
        }
        return acc;
      }, []);
      if (indexesOfXSigns.length >= 3) {
        for (let i = 0; i < WIN_PATTERNS.length; i++) {
          winner = WIN_PATTERNS[i].every((el) => indexesOfXSigns.includes(el));
          if (winner) {
            dispatch({
              type: "setIsGameEnded",
              payload: { isGameEnded: true },
            });
            return winner;
          }
        }
      }
    } else {
      const indexesOfOSigns = arr.reduce((acc, el, index) => {
        if (el === "o") {
          acc.push(index);
        }
        return acc;
      }, []);
      if (indexesOfOSigns.length >= 3) {
        for (let i = 0; i < WIN_PATTERNS.length; i++) {
          console.log(WIN_PATTERNS[i], indexesOfOSigns);
          winner = WIN_PATTERNS[i].every((el) => indexesOfOSigns.includes(el));
          if (winner) {
            dispatch({
              type: "setIsGameEnded",
              payload: { isGameEnded: true },
            });
            return winner;
          }
        }
      }
    }
  };
  const putSign = (indexOfPutSign) => {
    if (!getState().isGameEnded) {
      let newArr = [];
      if (!getState().field[indexOfPutSign] && !getState().isGameEnded) {
        const dispatchField = getState().field.map((elem, index) =>
          index === indexOfPutSign ? getState().currentPlayer : elem
        );
        console.log(dispatchField);
        dispatch({ type: "setField", payload: { setField: dispatchField } });

        newArr = getState().field.map((elem, index) =>
          index === indexOfPutSign ? getState().currentPlayer : elem
        );
      }

      const winOrNot = searchWinner(newArr);
      if (!winOrNot) {
        const draw = newArr.every((el) => {
          return el !== "";
        });
        if (draw) {
          dispatch({ type: "setIsDraw", payload: { isDraw: true } });
        }
      }

      if (!winOrNot) {
        if (getState().currentPlayer === "x") {
          dispatch({
            type: "changeCurrentPlayer",
            payload: { changePlayer: "o" },
          });
        } else {
          dispatch({
            type: "changeCurrentPlayer",
            payload: { changePlayer: "x" },
          });
        }
      }
    }
  };
  return <FieldLayout putSign={putSign}></FieldLayout>;
};
