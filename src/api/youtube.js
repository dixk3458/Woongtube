export class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
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

    return this.apiClient
      .filter({
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
    return this.apiClient
      .getPopular({
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
