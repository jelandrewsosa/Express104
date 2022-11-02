import UserService from "../services/UserService.js";

export default function GetAllUser(req, res, next) {
  const users = req.requestUsersInfo;
  const userService = new UserService();

  const getAllUser = userService.list(
    users
  );
  
  return res.status(200).json(getAllUser);
}
