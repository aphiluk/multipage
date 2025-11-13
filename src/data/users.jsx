const users = [
  {
    user: "user",
    pass: "pass",
    role: "admin",
    token: "user-token",
  },
];

export function verifyUser(user, pass) {
  const userFound = users.find((u) => u.user === user && u.pass === pass);
  return userFound ? { role: userFound.role, token: userFound.token } : null;
}

export default verifyUser;
