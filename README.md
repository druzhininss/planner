# Planner

Pet проект "Planner" это приложение для добавления и трекинга планов.
В проекте реализована серверная и клиентские части: пользователи, а также их планы хранятся в БД. Вся валидация пользователей осуществлена на бэке.
Пользователь имеет возможность добавлять/удалять/изменять планы, а также сортировать их по дате. Просроченные планы подсвечиваются красным, планы на сегодня оранжевым, планы на будущее зелёным.

#### Обзор приложения:

- Страница для неавторизованного пользователя:
![](/readme/mainWOAuth.png)

- Форма регистрации:
![](/readme/regForm.png)

- Ошибка валидации на форме регистрации (пользователь уже существует):
![](/readme/reValid1.png)

- Ещё одна ошибка валидации на форме регистрации (введённые пароли не совпадают):
![](/readme/reValid1.png)

- Логин форма:
![](/readme/loginForm.png)

- Ошибка валидации на логин форме:
![](/readme/loginFormValid.png)

- Страница для авторизованного пользователя (планы скрыты):
![](/readme/mainWAuth.png)

- Страница для авторизованного пользователя (планы не добавлены):
![](/readme/plansEmpty.png)

- Модальное окно (добавление нового плана):
![](/readme/plansCreate.png)

- Просмотр добавленных планов:
Даты подсвечиваются разными цветами: просроченные красным, планы на сегодня (14 марта 2022) оранжевым, планы на будущее зелёным.
![](/readme/plansWDate.png)

- Сортировка по убыванию:
![](/readme/plansSorted.png)

- Модальное окно (изменение плана):
![](/readme/planEdit.png)

- После внесения изменений они автоматически сортируются по дате и появляются в окне, страницу обновлять не нужно:
![](/readme/planEditedANdSorted.png)

## Стек технологий:
JavaScript

**DB**: PostgreSQL, Sequelize ORM

**Back**: Node.js, Express, Sessions, Bcrypt

**Front**: React + Redux, Redux-Saga, HTML5, CSS modules

### Установка:
В директории 2 папки:
* **server/** Отвечает за back-end. 
   * cd server
   * npm ci
   * npx sequelize db:create (в server/db/config/config.json может потребоваться изменить пользователя на вашего)
   * npm run seed (запустит миграции и сиды)
   * npm run dev (запуск сервера)
   * если нужно откатить сиды, то прописан скрипт npm run revert (откат миграций и сидов), затем можно вернуться к шагу 4
* **client/** - front-end. 
   * cd client 
   * npm ci
   * npm start
