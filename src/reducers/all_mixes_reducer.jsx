export default function(state, action) {
  if (state === undefined) {
    return []
  }

  switch (action.type) {
    case ('SET_MIXES'):
      return action.payload;
    case ('FETCH_MIX'):
      return action.payload;
    default:
      return state;
  }
}


