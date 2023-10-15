import axios from 'axios';

export class Youtube {
  constructor() {
    this.httpClient = axios.create({
      baseURL: 'https://www.googleapis.com/youtube/v3',
      params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
    });
  }

  async filter(category) {
    return category ? this.#filterByCategory(category) : this.#mostPopular();
  }

  async #filterByCategory(category) {
    let videoCategoryId;
    switch (category) {
      case 'music':
        videoCategoryId = 10;
        break;
      case 'sports':
        videoCategoryId = 17;
        break;
      case 'game':
        videoCategoryId = 20;
        break;
      default:
        throw new Error('not valid videoCategoryId');
    }

    return this.httpClient
      .get('videos', {
        params: {
          part: 'snippet',
          chart: 'mostPopular',
          maxResults: 25,
          regionCode: 'KR',
          videoCategoryId: videoCategoryId,
        },
      })
      .then(res => res.data.items);
  }

  async #mostPopular() {
    return this.httpClient
      .get('videos', {
        params: {
          part: 'snippet',
          chart: 'mostPopular',
          maxResults: 25,
          regionCode: 'KR',
        },
      })
      .then(res => res.data.items);
  }
}
