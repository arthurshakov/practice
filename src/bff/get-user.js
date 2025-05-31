import { getUsers } from "./get-users";

export const getUser = async (requestedLogin) => {
  const users = await getUsers();
  return users.find(({login}) =>  login === requestedLogin);
};
