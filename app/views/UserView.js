const UserService = require("../services/UserService");

class UserView {
  static createUser(payload) {
    if (payload === null) {
      return { error: "payload no existe" };
    } else if (
      payload.username === null ||
      typeof payload.username !== "string" ||
      payload.name === null ||
      typeof payload.name !== "string" ||
      payload.id === null ||
      typeof payload.id !== "number"
    ) {
      return { error: "necesitan tener un valor válido" };
    } else {
      return UserService.create(payload.id, payload.username, payload.name);
    }
  }
}
module.exports = UserView;
