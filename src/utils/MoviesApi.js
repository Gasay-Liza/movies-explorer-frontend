import React, { useState, useEffect } from "react";
import { BASE_URL } from "./constans";

class MoviesApi {
  constructor({ baseUrl, headers, credentials }) {
    this._baseUrl = BASE_URL;
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
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  //Запрос на сервер
  _request(url, options) {
    return fetch(url, options).then(this._checkResponse);
  }

  // Получение начальных карточек фильмов с сервера
  getInitialMovies() {
    return this._request(`${this._baseUrl}/beatfilm-movies`)
      .then(this._checkResponse)
  }
}


const moviesApi = new MoviesApi({
  baseUrl: "https://api.nomoreparties.co",
  headers: {
    "Content-Type": "application/json",
  },
});

export default moviesApi;

