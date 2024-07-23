import "../App.css";

export const FieldLayout = ({ field, putSign }) => {
  return (
    <div className="field">
      {field.map((el, index) => (
        <button
          key={index}
          className="field_btn"
          onClick={() => putSign(Number(index))}
        >
          {field[index]}
        </button>
      ))}
    </div>
  );
};
