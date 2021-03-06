import tags from '../tags';
import mixes from '../mixes';

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

export function setMixes() {
  return {
    type: 'SET_MIXES',
    payload: mixes
  }
}

export function filterMixes(allMixes, selectedTags) {
  let outputMixes = []
  if (selectedTags.length == 0) {
    outputMixes = allMixes
  } else {
    outputMixes = mixes.filter((mix) => {
      return mix.tags.filter(x => selectedTags.includes(x)).length > 0
    })
  }

  outputMixes.sort(function(a,b) {
  return ((b.tags.filter(x => selectedTags.includes(x)).length) - (a.tags.filter(x => selectedTags.includes(x)).length))
  })

  return {
    type: 'FILTER_MIXES',
    payload: outputMixes
  }
}

export function fetchMix(id) {
  // console.log(id)
  // mixes.forEach((mix) => {
  //   console.log(mix.id == id)
  // })

  const mix = mixes.find(mix => mix['id'] == id)
  return {
    type: 'FETCH_MIX',
    payload: [mix]
  }
}
