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
register = (name, email, password) => {
  return this._request(`${this._baseUrl}/cards`, {
    method: "POST",
    credentials: 'include',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
  },
  body: JSON.stringify({
    email,
    password,
    name,
  }),
  })
}



// export const register = (name, email, password) => {
//   return fetch(`${this._baseUrl}/signup`, {
//     method: "POST",
//     headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       email,
//       password,
//       name,
//     }),
//   }).then(getResponse);
// };


// Авторизация
authorize(email, password) {
  return this._request(`${this._baseUrl}/signin`, {
    method: "POST",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    body: JSON.stringify({
      email,
      password,
    }),
  })
};


// //Авторизация
// export const authorize = (email, password) => {
//   return fetch(`${this._baseUrl}/signin`, {
//     method: "POST",
//     headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//     body: JSON.stringify({
//       email,
//       password,
//     }),
//   })
//     .then(getResponse);
// };


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


// //Выход из аккаунта
// export const signout = () => {
//     return fetch(`${this._baseUrl}/signout`, {
//       method: "GET",
//       credentials: "include", // теперь куки посылаются вместе с запросом
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//     }).then(getResponse);
//   };


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

// //Проверка токена(данных, полученных с профиля)
// export const checkToken = () => {
//     return fetch(`${this._baseUrl}/users/me`, {
//       method: "GET",
//       credentials: "include", // теперь куки посылаются вместе с запросом
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//     }).then(getResponse);
// };


  // Получение данных профиля с сервера
  getUserInfo = () => {
    return this._request(`${this._baseUrl}/users/me`, {
      credentials: 'include',
      headers: this._headers,
    });
  }
}

  const mainApi = new MainApi({
    baseUrl: 'https://localhost:3000',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
  
  export default mainApi;
