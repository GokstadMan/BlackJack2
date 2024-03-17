import React from 'react';

const Card = ({ card }) => {
  return (
    <div className="flex justify-center items-center w-full h-full m-2">
      <img className='w-24 h-32 m-2' src={card.imgPath} alt={'card-' + card.imgPath} />
    </div>
  );
};

export default Card;