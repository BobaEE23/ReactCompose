import { InformationLayout } from "./InformationLayout";

export const Information = ({ isDraw, isGameEnded, currentPlayer }) => {
  return (
    <InformationLayout
      isDraw={isDraw}
      isGameEnded={isGameEnded}
      currentPlayer={currentPlayer}
    ></InformationLayout>
  );
};
