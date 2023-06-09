# Дипломный проект (frontend)

## Описание

Дипломный проект, фронтенд часть которой выполнена на основе обучения в  [Яндекс.Практикуме](https://praktikum.yandex.ru/)
по специальности Веб-разработчик. Серверная часть подготовлена и  находится в репозитории
[movies-explorer-api](https://github.com/Gasay-Liza/movies-explorer-api)

## Страница проекта

https://github.com/Gasay-Liza/movies-explorer-api

## Структура и функционал

Сайт состоит из нескольких страниц:

*  `/` — **главная страница**. Содержит информацию о выполненном проекте.
*  `/movies` — **страница с фильмами**. На ней есть форма поиска фильмов и блок с результатами поиска.
*  `/saved-movies` — **страница с сохранёнными фильмами.** Показывает фильмы, сохранённые пользователем.
*  `/signup` — **страница регистрации.** Позволяет пользователю зарегистрировать аккаунт.
*  `/signin` — **страница авторизации.** На ней пользователь может войти в систему.
*  `/profile` — **страница редактирования профиля.** Пользователь может изменить данные своего аккаунта.

## Технологии

Проект реализован на React, структура проекта создана с помощью `Create React App`

## Ссылка на сгенерированный макет в Figma

[Макет](https://www.figma.com/file/r0yOl9EKdJgLnATzGxYzXQ/Diploma-(Copy)?type=design&node-id=891%3A3857&t=Q5WhxzxHVRj2cOhH-1)

## Запуск проекта

1. Клонировать репозиторий

    `git clone https://github.com/Gasay-Liza/movies-explorer-api.git`

2. Установить зависимости

    `cd movies-explorer-frontend`

    `npm install`

3. Для запуска использовать команды

    `npm start`

    Запуск приложения в режиме разработки.
    Для просмотра результатов в браузере откройте http://localhost:3000
    После внесения изменений страница перезагрузится автоматически

    `npm run build`

    Создает оптимизированную версию приложения, готовую для развертывания, в папке `build`
