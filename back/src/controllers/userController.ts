import { Request, Response } from 'express';
import { getAllUsers, getUserById, createUser, validateCredential } from '../services/userService';

export const getAllUsersController = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).send((error as Error).message);
  }
};

export const getUserByIdController = async (req: Request, res: Response) => {
  const userId = parseInt(req.params.id);
  try {
    const user = await getUserById(userId);
    if (user) {
      res.json(user);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    res.status(500).send((error as Error).message);
  }
};

export const createUserController = async (req: Request, res: Response) => {
  const { name, email, birthdate, nDni, username, password } = req.body;
  try {
    const newUser = await createUser(name, email, new Date(birthdate), nDni, username, password);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).send((error as Error).message);
  }
};

export const validateLoginController = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    const credentialId = await validateCredential(username, password);
    if (credentialId !== undefined) {
      const user = await getUserById(credentialId);
      if (user) {
        res.status(200).json({
          login: true,
          user: {
            id: user.id,
            name: user.name,
            email: user.email,
            birthdate: user.birthdate,
            nDni: user.nDni
          }
        });
      } else {
        res.status(400).send('User not found');
      }
    } else {
      res.status(401).send('Invalid credentials');
    }
  } catch (error) {
    res.status(400).send((error as Error).message);
  }
};
