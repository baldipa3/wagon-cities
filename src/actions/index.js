import cities from '../../assets/data/cities'

export function setCities() {
  return {
    type: 'SET_CITIES',
    payload: cities
  }
  debugger
}
