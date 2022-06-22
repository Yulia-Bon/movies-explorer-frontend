## Описание:
**Movies-explorer** - это интерактивная страница,где можно искать фильмы и добавлять в избранное, и удалять.

## [API проекта](https://movies-express.ybon.nomoreparties.sbs)
## [Сcылка на домен](https://movies-react.ybon.nomoreparties.sbs)

## Функциональность:
* регистрация и авторизация пользователя
* редактирование профиля
* поиск фильмов
* добавление фильмов в избранное и удаление
* валидация форм на стороне клиента
* фильтрация фильмов происходит на стороне клиента, поиск фильмов регистронезависимый
* асинхронные GET- и POST-запросы к API
* для хранения данных о пользователе использовать глобальную стейт-переменную currentUser, созданную с помощью createContext
* JWT-токен сохраняется в localStorage, при выходе из аккаунта jwt удаляется
* если пользователь повторно переходит на страницу фильмов, то при монтировании компонента ранее сохранённые данные достаются из локального хранилища
* клик по карточке переводить на ютюб-трейлер фильма
* количество карточек, которые отображаются на странице, зависит от ширины экрана устройства
* кнопка «Ещё» загружает количество карточек, которое зависит от ширины экрана устройства, когда все карточки отрисованы, кнопка «Ещё» пропадает
* для отслеживания изменения ширины экрана устройства, установлен слушатель "resize" и установлен setTimeout на вызов этой функции внутри слушателя "resize"
* шапка сайт имеет разные пункты в меню в зависимости от того, авторизован ли пользователь
* роуты /saved-movies, /movies, /profile защищёны HOC-компонентом , для защиты маршрутов если пользователь не авторизован
* при попытке перейти на любой защищённый роут происходит редирект
* при попытке перейти на несуществующую страницу происходит редирект на страницу «404»

## Используемые технологии:
* HTML
* CSS
* React.js
* JavaScript
* Flexbox
* Grid Layout
* Файловая структура по методологии БЭМ, Nested
* Медиазапросы
* Webpack

## Инструкция по установке:
Клонируем репозиторий:
```
git clone https://github.com/Yulia-Bon/movies-explorer-frontend.git
```
Переходим в папку проекта:
```
cd movies-explorer-frontend
```
Устанавливаем зависимости:
```
npm install
Для корректной работы необходила 17 версия React
```
Запускаем проект на компьютере:
```
npm start
```
