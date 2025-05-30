# BLOG

## Структура данных приложения, сущности и таблицы БД

### Области хранения данных

- База данных на json-server
- BFF
- Redux store

### Сущности приложения

- Пользователь
  - БД (список пользователей)
  - BFF (сессия текущего пользователя)
  - Redux store (отображение в браузере)
- Роль пользователя
  - БД (список ролей)
  - BFF (сессия текущего пользователя с ролью)
  - Redux store (использование на клиенте)
- Статья
  - БД (список статей)
  - Redux store (отображение в браузере)
- Комментарии
  - БД (список комментариев)
  - Redux store (отображение в браузере)

### Таблицы БД

- Пользователи - users: id / login / password / registered_at / role-id
- Роли - roles: id / name
- Статьи - posts: id / title / image_url / content / published_at
- Комментарии - comments: id / author_id / post_id / content

### Схема состояния на BFF

- Сессия текущего пользователя: login / password / role

### Схема для Redux store (на клиенте)

- user: id / login / roleId
- posts: массив post: id / title / imageUrl / publishedAt / commentsCount
- post: id / title / imageUrl / content / publishedAt / comments: массив comment: id / author / content / publishedAt
- users: массив user: id / login / registeredAt / role
