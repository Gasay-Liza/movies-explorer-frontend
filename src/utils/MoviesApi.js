import React, { useState, useEffect } from "react";
export const BASE_URL = "https://api.nomoreparties.co";

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
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  //Запрос на сервер
  _request(url, options) {
    return fetch(url, options).then(this._checkResponse);
  }

  // Получение карточек с сервера
  getInitialMoviesCards() {
    return this._request(`${this._baseUrl}/beatfilm-movies`, {
      headers: this._headers,
    });
  }
}

const moviesApi = new MoviesApi({
  baseUrl: "https://api.nomoreparties.co",
  headers: {
    "Content-Type": "application/json",
  },
});

export default moviesApi;