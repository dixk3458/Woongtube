import axios from 'axios';

export async function filter(category) {
  return axios
    .get(`/mock/${category ? category : 'popular'}.json`)
    .then(res => res.data.items);
}
