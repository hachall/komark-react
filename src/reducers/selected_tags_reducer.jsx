export default function(state, action) {
  if (state === undefined) {
    return [];
  }

  // toggleTags = (tag) => {
  //   if (state.includes(tag)) {
  //     let tags = state.splice(state.indexOf(tag), 1)
  //   } else {
  //     let tags = state.push(tag)
  //   }
  //   return tags
  // }

  switch( action.type) {
    case 'SELECT_TAG':
      // return toggleTags(action.payload)
      // return [action.payload]
      const tags = state
      if (state.includes(action.payload)) {
        return state.filter(element => element !== action.payload);
         // tags.slice(state.indexOf(action.payload))
      } else {
        return [].concat(state, action.payload)
        // tags.push(action.payload)
      }
      // return tags
    default:
      return state;
  }


}
