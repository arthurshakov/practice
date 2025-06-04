import { getUser } from './get-user';
import { addUser } from './add-user';
import { sessions } from './sessions';
// import { createSession } from './create-session';

export const server = {
  async logout(session) {
    sessions.remove(session);
  },
  async authorize(authLogin, authPassword) {
    const user = await getUser(authLogin);

    if (!user) {
      return {
        error: 'Такого пользователя нет',
        res: null,
      }
    }

    if (user.password !== authPassword) {
      return {
        error: 'Неверный пароль',
        res: null,
      }
    }

    return {
      error: null,
      res: {
        id: user.id,
        login: user.login,
        roleId: user.role_id,
        session: sessions.create(user),
      },
    }
  },
  async register(regLogin, regPassword) {
    const user = await getUser(regLogin);

    if (user) {
      return {
        error: 'Такой логин уже занят',
        res: null,
      }
    }

    await addUser(regLogin, regPassword);

    // const session = createSession(user.role_id);

    return {
      error: null,
      res: {
        id: user.id,
        login: user.login,
        roleId: user.role_id,
        session: sessions.create(user),
      },
    }
  }
};
