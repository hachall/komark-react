export default function(state, action) {
  if (state === undefined) {
    return [[], []]
  }

  // if (action.type === 'SET_TAGS') {
  //   return action.payload
  // } else {
  //   return state;
  // }

  switch (action.type) {
    case ('SET_TAGS'):
      return action.payload;
    default:
      return state;
  }
}


