import axios from 'axios';

export class FakeYoutubeClient {
  async filter(params) {
    const categoryId = params.params.videoCategoryId;

    let category;
    switch (categoryId) {
      case 10:
        category = 'music';
        break;
      case 17:
        category = 'sports';
        break;
      case 20:
        category = 'game';
        break;
      default:
        throw new Error('not valid videoCategoryId');
    }

    return axios.get(`/mock/${category}.json`);
  }

  async getPopular() {
    return axios.get('/mock/popular.json');
  }

  async search() {
    return axios.get(`/mock/blackpink.json`);
  }

  async channels() {
    return axios.get('/mock/channel.json');
  }
}
