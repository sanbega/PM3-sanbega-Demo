"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const credentialController_1 = require("../controllers/credentialController");
const router = (0, express_1.Router)();
router.post('/credentials', credentialController_1.createCredentialController);
router.post('/credentials/validate', credentialController_1.validateCredentialController);
exports.default = router;
