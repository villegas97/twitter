const User = require("../../app/models/User");
const UserService = require("../../app/services/UserService");
describe("Tests for UserService", () => {
  test("1. Create a new user using the UserService", () => {
    const user = UserService.create(1, "villegas97", "Villegas");
    expect(user.username).toBe("villegas97");
    expect(user.name).toBe("Villegas");
    expect(user.id).toBe(1);
    expect(user.bio).not.toBeUndefined();
  });
  test("2. Get all user data in a list", () => {
    const user = UserService.create(1, "villegas97", "Villegas");
    const userInfoInList = UserService.getInfo(user);
    expect(userInfoInList[0]).toBe(1);
    expect(userInfoInList[1]).toBe("villegas97");
    expect(userInfoInList[2]).toBe("Villegas");
    expect(userInfoInList[3]).toBe("Sin bio");
  });
  test("3. Update username", () => {
    const user = UserService.create(1, "villegas97", "Villegas");
    UserService.updateUserUsername(user, "villeg");
    expect(user.username).toBe("villeg");
  });
});
