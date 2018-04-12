import { createSelector } from 'reselect'
import _ from 'lodash';

const getPlayers = (state) => state.footballPlayers
const getKeywords = (state) => state.filters.searchkeywords
const getAges = (state) => state.filters.searchAge
const getPosition = (state) => state.filters.searchPosition
const getFilter = (state) => state.filters.filterBy

// We parse Date of Birth then will append Age to Player Info
const parseDateOfBirth = createSelector(
  [ getPlayers ],
  (players) => players.map((player) => {
      let year, age;
      year = player.dateOfBirth.substr(0, 4);
      age = new Date().getFullYear() - year;
     return {
       ...player,
       age: age
     };
  })
)

// We group players by in-game Position
const getByPositions = createSelector(
  [ parseDateOfBirth ],
  (players) => {
    const grouped = _.groupBy(players, player => player.position);
    return {...grouped}
  }
)

// Filter by Keywords
const getFilteredByKeywords = createSelector(
  [ parseDateOfBirth, getKeywords ],
  (players, keyword) => players.filter(
    player => player.name.includes(keyword)
  )
)

// Filter by Age
const getFilteredByAge = createSelector(
  [ parseDateOfBirth, getAges ],
  (players, number) => {
    const grouped = _.groupBy(players, player => player.age);
    return {
      ...grouped,
      age: number
    }
  }
)

// Main Selector
export const onSearch = createSelector(
  [ parseDateOfBirth, getByPositions, getFilteredByKeywords, getFilteredByAge, getPosition, getFilter ],
  (players, byPositions, byKeywords, byAge, searchPosition, filter ) => {
    switch (filter) {
      case 'SHOW_ALL':
        return [...players]

      case 'FILTERED_BY_POSITION':
        return byPositions[searchPosition]

      case 'FILTERED_BY_KEYWORDS':
        return [...byKeywords]

      case 'FILTERED_BY_AGE':
        return byAge[byAge.age]

      default:
        return [...players]
    }
  }
)
