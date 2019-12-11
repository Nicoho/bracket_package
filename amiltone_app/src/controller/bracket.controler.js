import Axios from "axios";

const initialState = {
  tournament: {
    name: '',
    mode: '',
    doubleElim: false,
    thirdPlace: false,
    teams: []
  },
  loading: true,
  error: ''
}

const reduceTournament = (state = initialState, action) => {
  switch (action.type) {
    case 'onSuccess':
      return {
        ...state,
        tournament: {
          name: action.payload.data.name,
          mode: action.payload.data.rules.playerMode,
          doubleElim: action.payload.data.doubleEliminationTournament,
          thirdPlace: action.payload.data.thirdPlaceGame,
          teams: action.payload.data.teams
        },
        loading: false
      };
    case 'onFailure':
      return {
        ...state,
        error: 'Erreur dans le chargement des données'
      };
    default:
      return { ...state }
  }
}

const actionGetTournamentSuccess = (dispatch, data) => {
  dispatch({ type: 'onSuccess', payload: data })
}

const actionGetTournamentFailure = (dispatch, err) => {
  dispatch({ type: 'onFailure', payload: err })
}


async function getTournament(dispatch) {
  Axios({
    method: 'get',
    url: 'http://localhost:8985/api/1.0/tournaments/5db84e41d4ca0e3780536768'
  }).then(data =>
    actionGetTournamentSuccess(dispatch, data)
  ).catch(error => actionGetTournamentFailure(dispatch, error))
}


export { initialState, getTournament, reduceTournament }