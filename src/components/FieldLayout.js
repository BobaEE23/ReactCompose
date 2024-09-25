import "../App.css";
import { store } from "../store";
import { useState, useEffect } from "react";

const { getState, subcribe } = store;
export const FieldLayout = ({ putSign }) => {
  const [data, setData] = useState(store.getState());
  useEffect(() => {
    subcribe(() => setData(getState()));
  }, []);
  return (
    <div className="field">
      {getState().field.map((el, index) => (
        <button
          key={index}
          className="field_btn"
          onClick={() => putSign(Number(index))}
        >
          {getState().field[index]}
        </button>
      ))}
    </div>
  );
};
