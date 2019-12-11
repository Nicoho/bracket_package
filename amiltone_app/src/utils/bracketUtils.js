

// Définir en fonction du mode, les box à l'affichage (décroissance des rounds, arrêt au dernier)
const getRounds = (firstRound, mode) => {
  let emptyTeam = ""

  if (mode === '1v1') {
    emptyTeam = { attacker: { firstName: 'tbc' } }
  } else {
    emptyTeam = { attacker: { firstName: 'tbc' }, defender: { firstName: 'tbc' } }
  }
  if (firstRound) {
    if (firstRound.length !== 0) {
      var temp = [...firstRound];
      var long = temp[temp.length - 1].length;
      if (long > 1) {
        temp.push([])
        for (let i = 1; i <= long / 2; i++) {
          temp[temp.length - 1].push(emptyTeam)
        }
        return getRounds(temp, mode)
      } else {
        temp.splice(temp.length - 1, 1)
        for (let j = 0; j < temp.length; j += 1) {
          let games = [];
          if (temp[j].length > 1) {
            for (let i = 0; i < temp[j].length - 1; i += 2) {
              games.push([temp[j][i], temp[j][i + 1]])
            }
          }
          temp[j] = games
        }
        return temp
      }
    }
  }
}



export { getRounds }