import UserService from "../services/UserService.js";

export default function UpdateUser(req, res, next) {
  const { email } = req.body;
  const userId = req.params.userId;
  const users = req.requestUsersInfo;
  const userService = new UserService();

  const updateUser = userService.update(userId, {
    email, users
  });

  return res.status(200).json(updateUser);
}
