import { getSession, addSession, deleteSession } from "./api";

export const sessions = {
  async remove(hash) {
    const session = await getSession(hash);

    if (!session) {
      return;
    }

    // delete this.list[hash];
    deleteSession(session.id);
  },
  create(user) {
    const hash = Math.random().toFixed(50);

    addSession(hash, user);

    return hash;
  },
  async access(hash, accessRoles) {
    const session = await getSession(hash);

    return !!session.user && accessRoles.includes(session.user.roleId);
  },
};
