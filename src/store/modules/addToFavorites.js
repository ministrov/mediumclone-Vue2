import addToFavoritesAPI from '@/api/addToFavorites'

export const actionTypes = {
  addToFavorites: '[addToFavorites] Add to favorites'
}

export const mutationTypes = {
  addToFavoritesStart: '[addToFavorites] Add to favorites start',
  addToFavoritesSuccess: '[addToFavorites] Add to favorites success',
  addToFavoritesFailure: '[addToFavorites] Add to favorites failure'
}

const mutations = {
  [mutationTypes.addToFavoritesStart]() {},
  [mutationTypes.addToFavoritesSuccess]() {},
  [mutationTypes.addToFavoritesFailure]() {}
}

export default {
  addToFavoritesAPI,
  mutations
}