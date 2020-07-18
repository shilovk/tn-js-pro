class GiphyService {
  constructor({request}) {
    this.request = request;
    this.cache = {};
  }

  async find(query) {
    if (!query) {
      throw new Error('Whoops! query is empty')
    };

    if (this.cache[query]) {
      console.log('Load from cache');
      return this.cache[query];
    };

    return await(this._findUrl(query));
  };

  _findUrl(query) {
    return this.request
      .get(query)
      .then((result) => {
        this.cache[query] = result.data[0].images.fixed_height_downsampled.url;
        return this.cache[query];
      })
      .catch(() => new Error('Giphy Service not found url'));
  }
}
