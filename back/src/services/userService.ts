import { AppDataSource } from '../config/data-source';
import User from '../entities/User';
import Credential from '../entities/Credential';
import { createCredential } from './credentialService';

const userRepository = AppDataSource.getRepository(User);
const credentialRepository = AppDataSource.getRepository(Credential);

export const getAllUsers = async (): Promise<User[]> => {
  return await userRepository.find();
};

export const getUserById = async (id: number): Promise<User | null> => {
  return await userRepository.findOneBy({ id });
};

export const createUser = async (name: string, email: string, birthdate: Date, nDni: string, username: string, password: string): Promise<User> => {
  const credentialId = await createCredential(username, password);
  const credential = await credentialRepository.findOneBy({ id: credentialId });
  if (!credential) {
    throw new Error('Failed to create credential');
  }

  const newUser = userRepository.create({ name, email, birthdate, nDni, credential });
  await userRepository.save(newUser);
  return newUser;
};

export const validateCredential = async (username: string, password: string): Promise<number | undefined> => {
  const credential = await credentialRepository.findOne({ where: { username, password } });
  return credential ? credential.id : undefined;
};
