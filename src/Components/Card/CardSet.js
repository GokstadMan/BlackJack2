import Card from './Card';
import React from 'react';
import { currentPlayerScore } from '../../Service/localStorageKeys';

const CardSet = ({roleName, score, cardsInHand, msg}) => {
  const currentOverallScore = localStorage.getItem(currentPlayerScore);

  return (
    <div>
      <h2>{roleName} ({score}) {msg}</h2>
      <div className="flex justify-center items-center w-full h-full m-2">
        {cardsInHand.length > 0 && cardsInHand.map((cardItem, index) => <Card key={index} card={cardItem} />)}
      </div>
      {currentOverallScore !== null && roleName === 'Player' && 'Overall score ' + currentOverallScore}
    </div>
  );
};

export default CardSet;
