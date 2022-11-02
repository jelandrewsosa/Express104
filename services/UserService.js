import { v4 as uuidv4 } from 'uuid';

export default class UserService {
  constructor(users = []) {
    this.users = users;
  }

  create(userObject) {
    // Add the userObject to the `users`
    const {details, users} = userObject;
    const filteredDetails = Object.fromEntries(
      Object.entries(details).filter(
        ([key]) =>
          key.includes("firstName") ||
          key.includes("lastName") ||
          key.includes("email")
      )
    );
    
    const newUser = {
      id: uuidv4(),
      ...filteredDetails,
    };
    users.push(newUser);

    return newUser;
  }

  update(id, userObject) {
    // Update the user using ID with the new user Object
    const {email, users} = userObject;
    const userId = id;
    const findUser = users.find((user) => user.id === (userId));
  
    findUser.email = email;
    console.log("Account succesfully Updated");

    return findUser;
  }

  delete(id, userObject) {
    // Remove the user using ID
    const {users} = userObject;
    const userId = id;
    const deleteUser = users.splice(users.findIndex((user) => user.id === userId), 1);
  
    console.log("Account succesfully Deleted");

    return deleteUser;
  }

  read(id, userObject) {
    // Read the user using ID
    const {users} = userObject;
    const userId = id;
    const findUser = users.find((user) => user.id === (userId));

    return findUser;
  }

  list(getAllUser) {
    // List down all the users
    const users = getAllUser;
    
    return users;
  }
}