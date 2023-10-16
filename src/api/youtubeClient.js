import axios from 'axios';

export class YoutubeClient {
  constructor() {
    this.httpClient = axios.create({
      baseURL: 'https://www.googleapis.com/youtube/v3',
      params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
    });
  }

  async filter(category) {
    return this.httpClient.get('videos', category);
  }
  async getPopular(category) {
    return this.httpClient.get('videos', category);
  }

  async search(keyword) {
    return this.httpClient.get('search', keyword);
  }
}
