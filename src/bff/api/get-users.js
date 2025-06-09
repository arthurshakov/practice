import { transformUser } from "../../transformers";

export const getUsers = () =>
  fetch('http://localhost:3005/users')
    .then(rawUsers => rawUsers.json())
    .then(loadedUsers => loadedUsers && loadedUsers.map(user => transformUser(user)))
  ;
