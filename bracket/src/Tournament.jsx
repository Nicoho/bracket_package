import React from 'react';
import Round from './Round.jsx';
import Team from './Team.jsx'


const Tournament = ({ bracket, doubleElim, mode }) => {

  return (
    <div className='Tournament'>
      {
        bracket
          ? bracket.map((round, id) =>
            <Round tour={round} key={id} id={id} mode={mode} de={doubleElim} />
          )
          : ""
      }
      <div className='Final'>
        <Team team={{ attacker: { firstName: 'tbc' }, defender: { firstName: 'tbc' } }} roundId={bracket.length + 1} mode={mode} />
      </div>
      <div>test</div>
    </div >

  )
}

export default Tournament;