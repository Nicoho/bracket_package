import React from 'react';
import Game from './Game.jsx';


const Round = ({ tour, id, mode }) => {



  return (
    <div className='Round'>
      {
        tour.map((game, ind) =>
          <Game key={ind} id={ind} game={game} round={id} mode={mode} />
        )
      }
    </div>

  )
}

export default Round; 