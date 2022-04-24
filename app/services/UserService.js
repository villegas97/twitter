const User = require("./../models/User");

class UserService {
  static create(id, username, name) {
    return new User(id, username, name, "Sin bio");
  }
  static getInfo(User) {
    return [User.id, User.username, User.name, User.bio];
  }
  static updateUserUsername(User, username) {
    User.setUsername = username;
  }
}
module.exports = UserService;
