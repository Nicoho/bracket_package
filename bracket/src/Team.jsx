import React from 'react';
import classNames from 'classnames'



const Team = ({ team, id, roundId, gameId, mode }) => {
  const teamClass = classNames({
    'beforeLink': roundId !== 0,
    'firstRound': roundId === 0,
  })
  const playerMode = classNames({
    'oneVSone': mode === '1v1',
  })

  return (
    <div className='Team'>
      <div className={teamClass} />
      <div className={`teamUnit ${playerMode}`}  >
        {
          team.attacker
            ? <div className='player'>{team.attacker.firstName}</div>
            : "nc"
        }
        {
          team.defender
            ? <div className='player'>{team.defender.firstName}</div>
            : ""
        }
      </div>
    </div>
  )
}

export default Team;