import { Router } from 'express';
import { createCredentialController, validateCredentialController } from '../controllers/credentialController';

const router = Router();

router.post('/credentials', createCredentialController);
router.post('/credentials/validate', validateCredentialController);

export default router;
