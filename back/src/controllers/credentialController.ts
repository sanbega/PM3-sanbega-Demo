import { Request, Response } from 'express';
import { createCredential, validateCredential } from '../services/credentialService';

export const createCredentialController = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    const credentialId = await createCredential(username, password);
    res.status(201).json({ credentialId });
  } catch (error) {
    res.status(400).send((error as Error).message);
  }
};

export const validateCredentialController = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    const credentialId = await validateCredential(username, password);
    if (credentialId !== undefined) {
      res.json({ credentialId });
    } else {
      res.status(401).send('Invalid credentials');
    }
  } catch (error) {
    res.status(400).send((error as Error).message);
  }
};
