class MovieApi {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
      }

    _checkResponceResult(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error:${res.status}`);
      }

    getMovieInfo() {
      return fetch(this._baseUrl, {
      }).then(this._checkResponceResult);
    }
    
}

const movieApi = new MovieApi({
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  export default movieApi;  