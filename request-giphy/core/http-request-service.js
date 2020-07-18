class HttpRequestService {
  constructor({url}) {
    this.url = url;
    this.xhr = new XMLHttpRequest();
  }

  get(query) {
    this.xhr.abort();

    return new Promise((resolve, reject) => {
      this.xhr.open('GET', this.url + query);
      this.xhr.onload = () => {
        if (this.xhr.status !== 200) {
          reject(this.xhr.status);
          return;
        };
        resolve(JSON.parse(this.xhr.response));
      };
      this.xhr.send();
    });
  };
}
