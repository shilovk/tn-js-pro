'use strict';

const API_URL = 'http://api.giphy.com/v1/gifs/search';
const API_KEY = 'vhchAgPgG1tT3sce0LyCRE0xWTJAxRWM';
const URL = `${API_URL}?api_key=${API_KEY}&limit=1&q=`;

const request = new HttpRequestService({url: URL});
const giphy = new GiphyService({request: request});

const info = document.querySelector('#info');
const img = document.querySelector('#image');
const query = document.querySelector('#query');

query.addEventListener('input', _.debounce(_.throttle(onUpdate, 500)));

function onUpdate(event) {
  const query = event.target.value;
  info.innerHTML = '';
  giphy.find(query)
    .then((url) => {
      img.src = url;
    })
    .catch((error) => {
      img.src = '';
      info.innerHTML = error.message;
    });
};
