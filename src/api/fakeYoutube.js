import axios from 'axios';

export class FakeYoutube {
  constructor() {}

  async filter(category) {
    return category ? this.#filterByCategory(category) : this.#mostPopular();
  }

  async #filterByCategory(category) {
    return axios.get(`/mock/${category}.json`).then(res => res.data.items);
  }

  async #mostPopular() {
    return axios.get('/mock/popular.json').then(res => res.data.items);
  }
}
