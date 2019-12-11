import React, { useState, useEffect, useReducer, Suspense, lazy } from 'react';
import { initialState, reduceTournament, getTournament } from './controller/bracket.controler.js';
import { getRounds } from './utils/bracketUtils.js';
import './App.scss'


//import { Tournament } from 'bracket';

const Tournament = lazy(() => import('bracket/src/Tournament'))
const Test = lazy(() => import('./Test'))

console.log(Tournament);


function App() {

  const [state, dispatch] = useReducer(reduceTournament, initialState)
  const [blanckBracket, setBlanckBracket] = useState('')

  useEffect(() => {
    getTournament(dispatch);
  }, []);


  useEffect(() => {
    let blanckTemp = getRounds([state.tournament.teams], state.tournament.mode)
    setBlanckBracket(blanckTemp)
  }, [state.tournament.teams, state.tournament.mode])

  console.log('bracket', blanckBracket);


  const { name, mode, doubleElim, thirdPlace } = state.tournament
  return (

    <div className="App">
      <h2>{name}</h2>
      <div>
        mode : {mode} ; match pour la 3eme place? {thirdPlace ? 'oui' : 'non'}
      </div>
      <Suspense fallback={<div>chargement...</div>}>
        <Tournament bracket={blanckBracket} mode={mode} doubleElim={doubleElim} />
        <Test />
      </Suspense>

    </div>
  );
}

export default App;
