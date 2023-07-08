import React, { useState, useEffect } from "react";
import { MOVIES_API_URL } from "./constans";


class MoviesApi {
  constructor({ baseUrl, headers, credentials }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._credentials = credentials;
  }

  //Проверка ответа
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    // если ошибка, отклоняем промис
    console.log(res);
  }

  //Запрос на сервер
  _request(url, options) {
    return fetch(url, options).then(this._checkResponse);
  }


  // Получение начальных карточек фильмов с сервера
  getInitialMovies() {
    return this._request(`${this._baseUrl}/beatfilm-movies`, {
      headers: this._headers,
    });
  }
}


const beatfilmMoviesApi = new MoviesApi({
  baseUrl: MOVIES_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default beatfilmMoviesApi;