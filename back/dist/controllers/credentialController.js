"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCredentialController = exports.createCredentialController = void 0;
const credentialService_1 = require("../services/credentialService");
const createCredentialController = (req, res) => {
    const { username, password } = req.body;
    const credentialId = (0, credentialService_1.createCredential)(username, password);
    res.status(201).json({ credentialId });
};
exports.createCredentialController = createCredentialController;
const validateCredentialController = (req, res) => {
    const { username, password } = req.body;
    const credentialId = (0, credentialService_1.validateCredential)(username, password);
    if (credentialId !== undefined) {
        res.json({ credentialId });
    }
    else {
        res.status(401).send('Invalid credentials');
    }
};
exports.validateCredentialController = validateCredentialController;
