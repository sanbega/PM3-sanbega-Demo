"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserController = exports.getUserByIdController = exports.getAllUsersController = void 0;
const userService_1 = require("../services/userService");
const getAllUsersController = (req, res) => {
    const users = (0, userService_1.getAllUsers)();
    res.json(users);
};
exports.getAllUsersController = getAllUsersController;
const getUserByIdController = (req, res) => {
    const userId = parseInt(req.params.id);
    const user = (0, userService_1.getUserById)(userId);
    if (user) {
        res.json(user);
    }
    else {
        res.status(404).send('User not found');
    }
};
exports.getUserByIdController = getUserByIdController;
const createUserController = (req, res) => {
    const { name, email, birthdate, nDni, username, password } = req.body;
    const newUser = (0, userService_1.createUser)(name, email, new Date(birthdate), nDni, username, password);
    res.status(201).json(newUser);
};
exports.createUserController = createUserController;
