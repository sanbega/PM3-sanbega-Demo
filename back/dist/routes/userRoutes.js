"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const router = (0, express_1.Router)();
router.get('/users', userController_1.getAllUsersController);
router.get('/users/:id', userController_1.getUserByIdController);
router.post('/users/register', userController_1.createUserController);
exports.default = router;
