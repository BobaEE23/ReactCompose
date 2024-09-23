import "../App.css";
export const InformationLayout = ({ getState }) => {
  return (
    <>
      {getState().initialState.isDraw ? (
        <div>Ничья</div>
      ) : !getState().initialState.isDraw &&
        getState().initialState.isGameEnded ? (
        <div>Победа {getState().initialState.currentPlayer}</div>
      ) : !getState().initialState.isDraw &&
        !getState().initialState.isGameEnded ? (
        <div>Ходит {getState().initialState.currentPlayer}</div>
      ) : (
        console.log("ничего")
      )}
    </>
  );
};
