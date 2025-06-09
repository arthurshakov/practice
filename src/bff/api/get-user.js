import { transformUser } from "../../transformers";

export const getUser = async (requestedLogin) =>
  fetch(`http://localhost:3005/users/?login=${requestedLogin}`)
    .then(loadedUser => loadedUser.json())
    .then(([loadedUser]) => loadedUser && transformUser(loadedUser))
  ;
