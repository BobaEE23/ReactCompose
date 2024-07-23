import "../App.css";
export const InformationLayout = ({ isDraw, isGameEnded, currentPlayer }) => {
  return (
    <>
      {isDraw ? (
        <div>Ничья</div>
      ) : !isDraw && isGameEnded ? (
        <div>Победа {currentPlayer}</div>
      ) : !isDraw && !isGameEnded ? (
        <div>Ходит {currentPlayer}</div>
      ) : (
        console.log("ничего")
      )}
    </>
  );
};
