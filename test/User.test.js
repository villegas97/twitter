const User = require("./../app/models/User");
describe("Unit Tests for User class", () => {
  test("Create an User object", () => {
    const user = new User(1, "villegas97", "Luis", "Bio");
    expect(user.id).toBe(1);
    expect(user.username).toBe("villegas97");
    expect(user.name).toBe("Luis");
    expect(user.bio).toBe("Bio");
    expect(user.dateCreated).not.toBeUndefined();
    expect(user.lastUpdated).not.toBeUndefined();
  });
  test("Add getters", () => {
    const user = new User(1, "villegas97", "Luis", "Bio");
    expect(user.getUsername).toBe("villegas97");
    expect(user.getBio).toBe("Bio");
    expect(user.getDateCreated).not.toBeUndefined();
    expect(user.getLastUpdated).not.toBeUndefined();
  });
  test("Add setters", () => {
    const user = new User(1, "villegas97", "Luis", "Bio");
    user.setUsername = "Villegas";
    expect(user.username).toBe("Villegas");

    user.setBio = "New bio";
    expect(user.bio).toBe("New bio");
  });
});
