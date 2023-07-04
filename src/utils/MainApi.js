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
  console.log("res", res)    
    return res.json().then((err) => {
      return Promise.reject(`Error ${res.status}: ${err.message || err.error}`);
  })
  }
  return res.json();
}

//Запрос на сервер
_request(url, options) {
  return fetch(url, options).then(this._checkResponse);
}

//Регистрация
register = ({name, email, password}) => {
  return this._request(`${this._baseUrl}/signup`, {
    method: "POST",
    credentials: 'include',
    headers: {
      "Content-Type": "application/json",
  },
  body: JSON.stringify({
    email,
    password,
    name,
  }),
  })
}

// Авторизация
authorize(email, password) {
  return this._request(`${this._baseUrl}/signin`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
      },
    body: JSON.stringify({
      email,
      password,
    }),
  })
};

//Выход из аккаунта
signout = () => {
  return this._request(`${this._baseUrl}/signout`, {
    method: "GET",
    credentials: "include", // теперь куки посылаются вместе с запросом
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
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
  })
};

  // Получение данных профиля с сервера
  getUserInfo = () => {
    return this._request(`${this._baseUrl}/users/me`, {
      credentials: 'include',
      headers: this._headers,
    });
  }
}

  const mainApi = new MainApi({
    baseUrl: 'http://localhost:3001',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
  
  export default mainApi;
