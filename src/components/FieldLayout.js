import "../App.css";

export const FieldLayout = ({ getState, putSign }) => {
  return (
    <div className="field">
      {getState().initialState.field.map((el, index) => (
        <button
          key={index}
          className="field_btn"
          onClick={() => putSign(Number(index))}
        >
          {getState().initialState.field[index]}
        </button>
      ))}
    </div>
  );
};
