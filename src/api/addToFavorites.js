import axios from "axios";

const getUrl = slug => `/article/${slug}/favorite`

const addToFavorites = (slug) => {
  const url = getUrl(slug);
  
  return axios.post(url).then(response => response.data.article)
}

const removeFromFavorites = (slug) => {
  const url = getUrl(slug);

  return axios.delete(url).then(response => response.data.article)
}

export default {
  addToFavorites,
  removeFromFavorites
}