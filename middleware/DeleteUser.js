import UserService from "../services/UserService.js";

export default function DeleteUser(req, res, next) {
  const userId = req.params.userId;
  const users = req.requestUsersInfo;
  const userService = new UserService();

  const deleteUser = userService.delete(userId, {
    users
  });

  return res.status(200).json(deleteUser);
}
