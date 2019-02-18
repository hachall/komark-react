import tags from '../tags';

export function setTags() {

  return {
    type: 'SET_TAGS',
    payload: tags
  }
}

export function selectTag(tag) {
  return {
    type: 'SELECT_TAG',
    payload: tag
  }

}
