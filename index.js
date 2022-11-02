import express from "express";
import CheckIfUsersIsEmpty from "./middleware/CheckIfUsersIsEmpty.js";
import CheckIfValidBodyEmail from "./middleware/CheckIfValidBodyEmail.js";
import CheckIfValidQueryEmail from "./middleware/CheckIfValidQueryEmail.js";
import CheckIfEmailExist from "./middleware/CheckIfEmailExist.js";
import CreateUser from "./middleware/CreateUser.js";
import UpdateUser from "./middleware/UpdateUser.js";
import DeleteUser from "./middleware/DeleteUser.js";
import GetUserId from "./middleware/GetUserId.js";
import GetAllUser from "./middleware/GetAllUser.js";
import FindUserValidator from "./middleware/FindUserValidator.js";

const app = express();
const port = 3000;

app.use(express.json());

const users = [];
const setUsersInfo = (users) => {
  return (req, res, next) => {
    req.requestUsersInfo = users;
    next();
  };
};

app.use(setUsersInfo(users));

app.post(
  "/users",
  CheckIfValidBodyEmail,
  CheckIfEmailExist,
  CreateUser
);

app.get("/", (req, res) => {

  return res.send("Hello World!");
});

app.get(
  "/users",
  CheckIfUsersIsEmpty,
  GetAllUser
);

app.get(
  "/users/:userId",
  FindUserValidator,
  GetUserId
);

app.patch(
  "/users/:userId",
  FindUserValidator,
  CheckIfEmailExist,
  CheckIfValidBodyEmail,
  UpdateUser
);

app.delete(
  "/users/:userId",
  FindUserValidator,
  DeleteUser
);

app.listen(port, () => {
  console.log(`Server is Listening on port ${port}`);
});
