import UserService from "../services/UserService.js";

export default function GetUserId(req, res, next) {
  const userId = req.params.userId;
  const users = req.requestUsersInfo;
  const userService = new UserService();

  const getUserId = userService.read(userId, {
    users
  });

  return res.status(200).json(getUserId);
}
