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
  static getAllUsernames([user1, user2, user3]) {
    return [user1.getUsername, user2.getUsername, user3.getUsername];
  }
  //El siguiente método funciona si enviamos los usuarios desde el test como una lista de objetos
  //   static getAllUsernames(usuarios) {
  //     return usuarios.map((user) => user.getUsername);
  //   }
}
module.exports = UserService;
