import React from 'react';
import Team from './Team.jsx';


const setOffsetBetween = (round) => {
  return Math.pow(2, round + 1) * 50
}

const setOffsetTop = (round, id) => {
  let offsetTop;
  id === 0
    ? offsetTop = (Math.pow(2, round) - 1) * 50
    : offsetTop = (Math.pow(2, round + 1) - 1) * 50;
  return offsetTop
}


const Game = ({ game, round, id, mode }) => {

  return (
    <div className='Game' style={{ paddingTop: `${setOffsetTop(round, id)}px` }}>
      {/* <div className='teamsInGame'>
        {
          game.map((team, ind) => <Team key={ind} id={ind} team={team} roundId={round} gameId={id} />)
        }
      </div> */}
      <Team id={0} team={game[0]} roundId={round} mode={mode} />
      <div className='offsetLink' style={{ height: `${setOffsetBetween(round)}px` }} />
      <Team id={1} team={game[1]} roundId={round} mode={mode} />
      <div className='afterLink' />
    </div>
  )
}

export default Game;