import React from 'react';

const HomeScreen = ({ stageMode, setStageMode, playerName, setPlayerName }) => {
  return (
    <div>
      <img className='ml-[30%] mb-10 w-1/3' src={'./Images/blackjack-logo.png'} alt='home-screen-logo'/>
      <h2 className='text-2xl font-bold mb-2'>Enter player name:</h2>
      <input className='text-gray-500' type={'text'} autoFocus value={playerName} onChange={(e) => setPlayerName(e.target.value)} />
      <button
        disabled={playerName === ''}
        onClick={() => setStageMode({ ...stageMode, homeScreen: false, play: true })}
      >
        Lets play
      </button>
      <button
        onClick={() => setStageMode({ ...stageMode, homeScreen: false, highscore: true })}
      >
        Highscore
      </button>
    </div>
  );
};

export default HomeScreen;