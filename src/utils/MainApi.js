import { MAIN_API_URL } from "./constans";

class MainApi {
  constructor({ baseUrl, headers, credentials }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._credentials = credentials;
  }

  //Проверка ответа
  _checkResponse(res) {
    if (!res.ok) {
      // если ошибка, отклоняем промис
      console.log("res", res);
      return res.json().then((err) => {
        return Promise.reject(`${err.message}`);
      });
    }
    return res.json();
  }

  //Запрос на сервер
  _request(url, options) {
    return fetch(url, options).then(this._checkResponse);
  }


  // Авторизация
  authorize({ email, password }) {
    return this._request(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
  }


  //Регистрация
  register = ({ name, email, password }) => {
    return this._request(`${this._baseUrl}/signup`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        name,
      }),
    });
  };



  //Выход из аккаунта
  signout = () => {
    return this._request(`${this._baseUrl}/signout`, {
      method: "POST",
      credentials: "include", // теперь куки посылаются вместе с запросом
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  };


  //Проверка токена(данных, полученных с профиля)
  checkToken = () => {
    return this._request(`${this._baseUrl}/users/me`, {
      method: "GET",
      credentials: "include", // теперь куки посылаются вместе с запросом
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  };

  // // Получение данных профиля с сервера
  // getUserInfo = ({email, name}) => {
  //   return this._request(`${this._baseUrl}/users/me`, {
  //     credentials: "include",
  //     headers: this._headers,
  //     body: JSON.stringify({
  //       email,
  //       name,
  //     }),
  //   });
  // };

  // Проверка токена(данных, полученных с профиля)
  getSavedMovies = () => {
    return this._request(`${this._baseUrl}/movies`, {
      method: "GET",
      credentials: "include", // теперь куки посылаются вместе с запросом
      headers: this._headers,
    });
  };

  // Загрузка карточки фильма на сервер
  createMovieCard({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
  }) {
    return this._request(`${this._baseUrl}/movies`, {
      credentials: "include",
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        thumbnail,
        movieId,
        nameRU,
        nameEN,
      }),
    });
  }

  // Загрузка карточки фильма на сервер
  deleteMovieCard(movieId) {
    return this._request(`${this._baseUrl}/movies/${movieId}`, {
      credentials: "include",
      method: "DELETE",
      headers: this._headers,
    });
  }
}

const mainApi = new MainApi({
  baseUrl: MAIN_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  credentials: "include",
});

export default mainApi;
