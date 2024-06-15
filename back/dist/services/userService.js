"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getUserById = exports.getAllUsers = void 0;
const credentialService_1 = require("./credentialService");
const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', birthdate: new Date('1990-01-01'), nDni: '12345678', credentialsId: 1 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', birthdate: new Date('1992-02-02'), nDni: '87654321', credentialsId: 2 }
];
const getAllUsers = () => {
    return users;
};
exports.getAllUsers = getAllUsers;
const getUserById = (id) => {
    return users.find(user => user.id === id);
};
exports.getUserById = getUserById;
const createUser = (name, email, birthdate, nDni, username, password) => {
    const credentialsId = (0, credentialService_1.createCredential)(username, password);
    const newUser = {
        id: users.length + 1,
        name,
        email,
        birthdate,
        nDni,
        credentialsId
    };
    users.push(newUser);
    return newUser;
};
exports.createUser = createUser;
