import { FieldLayout } from "./FieldLayout";
import { useState } from "react";
export const Field = ({
  field,
  currentPlayer,
  setCurrentPlayer,
  isDraw,
  setIsDraw,
  setField,
  isGameEnded,
  setIsGameEnded,
}) => {
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
    if (currentPlayer === "x") {
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
            setIsGameEnded(true);
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
            setIsGameEnded(true);
            return winner;
          }
        }
      }
    }
  };
  const putSign = (indexOfPutSign) => {
    if (!isGameEnded) {
      let newArr = [];
      if (!field[indexOfPutSign] && !isGameEnded) {
        setField(
          field.map((elem, index) =>
            index === indexOfPutSign ? currentPlayer : elem
          )
        );
        newArr = field.map((elem, index) =>
          index === indexOfPutSign ? currentPlayer : elem
        );
      }

      const winOrNot = searchWinner(newArr);
      if (!winOrNot) {
        const draw = newArr.every((el) => {
          return el !== "";
        });
        if (draw) {
          setIsDraw(true);
        }
      }

      if (!winOrNot) {
        if (currentPlayer === "x") {
          setCurrentPlayer("o");
        } else {
          setCurrentPlayer("x");
        }
      }
    }
  };
  return <FieldLayout field={field} putSign={putSign}></FieldLayout>;
};
