"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCredential = exports.createCredential = void 0;
const credentials = [
    { id: 1, username: 'Sanbega', password: 'password1' },
    { id: 2, username: 'Prueba', password: 'password2' }
];
const createCredential = (username, password) => {
    const newCredential = {
        id: credentials.length + 1,
        username,
        password
    };
    credentials.push(newCredential);
    return newCredential.id;
};
exports.createCredential = createCredential;
const validateCredential = (username, password) => {
    const credential = credentials.find(c => c.username === username && c.password === password);
    return credential ? credential.id : undefined;
};
exports.validateCredential = validateCredential;
