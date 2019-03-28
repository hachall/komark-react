export default function(state, action) {
  if (state === undefined) {
    return [];
  }


  switch( action.type) {
    case 'SELECT_TAG':
      $([document.documentElement, document.body]).animate({
        scrollTop: $(".right-side").offset().top
      }, 200);

      const tags = state
      if (state.includes(action.payload)) {
        return state.filter(element => element !== action.payload);

      } else {
        return [].concat(state, action.payload)

      }

    default:
      return state;
  }


}
