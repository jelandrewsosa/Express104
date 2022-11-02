import UserService from "../services/UserService.js";

export default function CreateUser(req, res, next) {
  const details = req.body;
  const users = req.requestUsersInfo;
  const userService = new UserService();

  const newUser = userService.create({
    details,
    users
  });

  return res.status(201).json(newUser);
}
