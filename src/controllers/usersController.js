import { allUsers, userCreate } from "../models/usersModel.js";

const getUsers = async (__req, res) => {
  const users = await allUsers();
  res.status(200).json(users);
};

const newUser = async (req, res) => {
  const user = req.body;
  const rs = await userCreate(user);
  res.status(200).json(rs);
};

export { getUsers, newUser };
